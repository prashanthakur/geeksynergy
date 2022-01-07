import React from 'react'

export default function About() {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-2'>
                   <p className='geektext'>GeekSynergy</p>
                </div>
                <div className='col-5 titles'>
                    <h5>Company</h5>
                    <h5>Address</h5>
                    <h5>Phone</h5>
                    <h5>Email</h5>
                </div>
                <div className='col-5'>
                    <h4 className='logo_name'> GeekSynergy Technologies Pvt. Ltd</h4>
                    <h5>Sanjaynagar , Bengaluru-56</h5>
                    <h5>991027363</h5>
                    <h5>geeksynergy@gmail.com</h5>
                </div>
            </div>
        </div>
    )
}
