import React from 'react'

function About() {
    return (
        <div
            name="about"
            className='w-full h-screen bg-gradient-to-b from-gray-800
                to-black text-slate-100'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col
                    justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4
                        border-gray-500'>
                        About
                    </p>
                </div>

                <p className='text-xl mt-20'>
                    My name is Md. Abdullah Al Masum.I'm a Frontend Developer.
                    I can provide decent code and pixel perfect design.I also make the
                    database with SQL,MySQL.
                </p>

                <br />

                <p className='text-xl'>
                    Passionate Frontend Engineer who Proves skill
                    rather than showing skills. A developer who tries
                    to provide a simple and bugless code. A learner
                    with fast learning skills and lots of patience in
                    learning new things.
                </p>

            </div>
        </div>
    )
}

export default About
