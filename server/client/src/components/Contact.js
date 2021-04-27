import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const userContact = async () => {
        try {
            const res = await fetch('/getData', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const data = await res.json();
            setName(data.name)
            setEmail(data.email)

            if (!res.status == 200) {
                const error = new Error(res.error)
                throw error
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        userContact();
    }, [])

    const sendData = async (e) => {
        e.preventDefault()

        const res = await fetch('/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message
            })
        })

        const data = await res.json()

        if (data.message == "Error") {
            alert("Message not send")
        } else {
            alert("Message sent")
            setSubject("")
            setMessage("")
        }
    }

    return (
        <>
            <section className="mb-4">

                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                         a matter of hours to help you.</p>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form
                            id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input
                                            value={name.length == 0 ? "" : name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text" id="name" name="name" className="form-control" />
                                        <label for="name" className="">Your name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input
                                            value={email.length == 0 ? "" : email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="text" id="email" name="email" className="form-control" />
                                        <label for="email" className="">Your email</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            className="form-control" />
                                        <label for="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-12">

                                    <div className="md-form">
                                        <input type="text"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            id="message" name="message" rows="2" className="form-control md-textarea" />
                                        <label for="message">Your message</label>
                                    </div>

                                </div>

                                <div>
                                    <input
                                        onClick={sendData}
                                        type="submit" name="Signup" value="Send" />
                                </div>
                            </div>

                        </form>


                        <div class="status"></div>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Contact
