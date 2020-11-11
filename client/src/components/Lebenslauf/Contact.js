import React, { Component } from 'react';
import pozacv from '../../_FilesProd/pozacv.jpg';
import { Button } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <div className="float-right vertical-center">
                <a href='/Lebenslauf.pdf' download><Button className="float-right vertical-center">
                    Download als PDF Format</Button></a>
                <h1>Lebenslauf</h1>
                <div>
                    <a href="http://www.opreaweb.com/images/pozacv.jpg"><img src={pozacv} alt='pozacv' height="180" width="230" /></a>
                    <h2 className="float-right vertical-center">Rares-Stefan Oprea</h2>
                </div>
                <table >
                <tbody>
                    <tr>
                        <td> <strong>Email: </strong></td>
                        <td> opreararesstefan@gmail.com</td>
                    </tr>
                    <tr>
                        <td> <strong>Adresse: </strong></td>
                        <td> Grüner Weg 26, 84478 Waldkraiburg</td>
                    </tr>
                    <tr>
                        <td> <strong>Telefon: </strong></td>
                        <td> Festnetz: 08638-6965 380; Handy: 0151-7127 9327</td>
                    </tr>
                    <tr>
                        <td> <strong>Geboren am: </strong></td>
                        <td> 09. Juni 1985, Barlad, Rumänien</td>
                    </tr>
                    <tr>
                        <td> <strong>Familienstand:</strong></td>
                        <td> Verheiratet, 2 Kind</td>
                    </tr>
                    </tbody>
                </table>
                <h3 style={{ "font": "10px" }}>Mein Profil: </h3>
                <ul>
                    <li>Als erfahrener Programmierer mit Bachelor-Abschluss im
Bereich Digital Automation und internationaler Erfahrung
suche ich neue Herausforderungen im Bereich „Digital
Intelligence“ sowie die Möglichkeit zur beruflichen
Weiterentwicklung auf Führungsebene.
                    </li>
                    <li>Ich beherrsche alle gängigen Programmiersprachen auf
verschiedenen Systemen und bin gewohnt,
eigenverantwortlich nach Lösungen zu suchen und auch
größere Projekte zu leiten.
                    </li>
                </ul>
            </div>
        );
    }
}

export default Contact;