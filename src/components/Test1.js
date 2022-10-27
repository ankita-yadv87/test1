import React from 'react'
import "./Test1.css"

const Test1 = () => {
    return (
        <div className='bcgn'>
            <div className='layout'>
                <div className='back'>
                    <span>Back</span>
                </div>

                <div className='avatar'>
                    <div className='avatar2'></div>
                    <div className='account'>
                        <span>Personal Account</span>
                        <span>Andrew@polka.io</span>
                    </div>
                </div>

                <div className='wrap'>
                    <div className='caption'><span>Password</span></div>
                    <div className='form'>
                        <div>
                            andrew@polka|
                        </div>
                        <div className='f-btn'>
                        <button>
                            <span></span>
                        </button>
                        </div>
                        
                    </div>
                    <div className='forgot'>
                        <div>Forgot Password</div>
                        <div>Reset</div>
                    </div>
                </div>


                <div className='icon-btn'>
                    <div className='check'>
                        <span></span>
                        <span>Stay Signed in</span>
                    </div>
                    <div className='btn1'><span>sign in</span></div>
                </div>


                <div className='info'>
                    <div></div>
                    <div>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</div>
                </div>

            </div>
        </div>
    )
}

export default Test1