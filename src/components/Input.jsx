import React, { useState, useEffect } from "react";


localStorage.setItem('data', JSON.stringify([{
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany',
},
{
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
},
{
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Germany',
},
]))
export default function Input() {
    const dataLocal = JSON.parse(localStorage.getItem('data'))
    const [company, setCompany] = useState('');
    const [contact, setContact] = useState('');
    const [country, setCountry] = useState('');
    const [item, setItems] = useState([])



    const handleChangeContact = (e) => {
        return setContact(e.target.value)
    }
    const handleChangeCompany = (e) => {
        return setCompany(e.target.value)
    }
    const handleChangeCountry = (e) => {
        return setCountry(e.target.value)
    }


    useEffect(() => {
        console.log('mounted');
    }, [])

    const handleClick = () => {
        if ( contact === '' || company === '' || country === '' ) {
            return alert('vui lòng nhập đủ')
        }
        localStorage.setItem('data', JSON.stringify([...dataLocal, {contact,company,country}]))
         setItems([...item, dataLocal.push({contact,company,country})])
         setCompany('')
         setContact('')
         setCountry('')
    }

    return (
        <>
            <h2>HTML Table</h2>
            <table>
                <thead>
                    <tr key={'awmkalclawf'}>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {dataLocal.map((tableData, index) => {
                        return <tr key={tableData.company}>
                            <td key={tableData[index]}>{tableData.company}</td>
                            <td key={tableData[index]}>{tableData.contact}</td>
                            <td key={tableData[index]}>{tableData.country}</td>
                        </tr>

                    })
                    }
                    <tr key={'awbfgawl'}>
                        <td><input value={company} onChange={handleChangeCompany} /></td>
                        <td><input value={contact} onChange={handleChangeContact} /></td>
                        <td><input value={country} onChange={handleChangeCountry} /></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleClick}>Thêm</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )


}




