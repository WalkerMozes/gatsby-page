import React from "react"

import Layout from "../components/layout";
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />

            <h1>Contact</h1>
            <p>You can contact me in the following way:</p>
            <ol>
                <li>PHONE: 07XXX XXXXXX</li>
                <li>EMAIL: MOZESWALKER@XXXXX.COM</li>
                <li>TWITTER: <a href="https://www.google.com" target="_blank" rel="noreferrer"> Click Here!</a></li>
            </ol>
        </Layout>
    )
}

export default ContactPage; 