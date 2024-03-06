import React from 'react'

function ListeArticle() {
    //-------------------- Data --------------------
    //-------------------- Comportement --------------------
    //-------------------- Affichage --------------------
    return (
        <div className="App m-auto w-50 my-4">
            <h1 className='text-center my-4'>LISTE ARTICLES</h1>
            <table className='w-100'>
                <thead>
                    <tr className='bg-success text-light'>
                        <th>ID</th>
                        <th>CODE</th>
                        <th>DESIGNATION</th>
                        <th>PU</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>BB0001</td>
                        <td>Biere castel</td>
                        <td>3.50</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListeArticle
