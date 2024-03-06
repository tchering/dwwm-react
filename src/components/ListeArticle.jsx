import React, { useState } from 'react';
import styles from "./ListeArticle.module.css";

function ListeArticle() {
    const [articles, setArticles] = useState([
        { id: 1, code: 'BB001', designation: 'Biere Castel', pu: 3.50 },
        { id: 2, code: 'BB002', designation: 'Biere Heineken', pu: 4.50 },
        { id: 3, code: 'BB003', designation: 'Biere Guinness', pu: 5.50 },
        { id: 4, code: 'BB004', designation: 'Biere Corona', pu: 3.00 },
        { id: 5, code: 'BB005', designation: 'Biere Stella Artois', pu: 4.00 },
    ]);
    const handleModify = (id) => {
        alert(id);
    };
    return (
        <div className={styles.tableMain}>
            <h1 className={`text-center ${styles.title}`}>LISTE ARTICLES</h1>
            <div className='d-flex justify-content-between'>
                <button className="btn btn-md btn-info m-3">Creer</button>
                <button className="btn btn-md btn-success m-3">Valider</button>
            </div>
            <table className="w-100">
                <thead>
                    <tr className='bg-success text-light text-center'></tr>
                    {/* <table className={`table ${styles.tableCss}`}> */}

                    <tr className='bg-success text-light text-center'>
                        <th>ID</th>
                        <th>CODE</th>
                        <th>DESIGNATION</th>
                        <th>PU</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article) => (
                        <tr className='text-center' key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.code}</td>
                            <td>{article.designation}</td>
                            <td>{article.pu}</td>
                            <td className='d-flex justify-content-around'>
                                <button className='btn btn-sm btn-success'>Afficher</button>
                                <button className='btn btn-sm btn-danger'>Supprimer</button>
                                <button className='btn btn-sm btn-primary' onClick={() => handleModify(article.id)}>Modifier</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListeArticle
