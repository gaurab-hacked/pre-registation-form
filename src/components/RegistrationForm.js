import React from 'react'

const RegistrationForm = (props) => {

    const { formValChangeStream, registerVal, formValChange, valError, preRegistrationFormSubmit } = props;

    return (
        <form action="#" onSubmit={preRegistrationFormSubmit}>
            <div id="RegCheckStream">
                <label htmlFor="stream" id='stream'>Stream: </label>
                <div className="optionsStream">
                    <div className="options">
                        <label htmlFor="streamBBS">B.B.S</label>
                        <input type="checkbox" name="stream" id="streamBBS" value="BBS" onChange={formValChangeStream} />
                    </div>
                    <div className="options">
                        <label htmlFor="streamBCA">B.C.A</label>
                        <input type="checkbox" name="stream" id="streamBCA" value="BCA" onChange={formValChangeStream} />
                    </div>
                    <div className="options">
                        <label htmlFor="streamBBM">B.B.M</label>
                        <input type="checkbox" name="stream" id="streamBBM" value="BBM" onChange={formValChangeStream} />
                    </div>
                    <div className="options">
                        <label htmlFor="streamBSW">B.S.W</label>
                        <input type="checkbox" name="stream" id="streamBSW" value="BSW" onChange={formValChangeStream} />
                    </div>
                    <div className="options">
                        <label htmlFor="streamMBS">M.B.S</label>
                        <input type="checkbox" name="stream" id="streamMBS" value="MBS" onChange={formValChangeStream} />
                    </div>
                </div>
            </div>
            <p className="error">{valError.stream}</p>

            <div id="registerInputfield">
                <div id="RegName">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={registerVal.name} onChange={formValChange} />
                </div>
                <p className="error">{valError.name}</p>

                <div id="RegDOB">
                    <div id="DOBA">
                        <label htmlFor="BCDBO">Date Of Birth
                        <br/> B.S: </label>
                        <input type="date" name="BSdob" id="BSdob" value={registerVal.BSdob} onChange={formValChange} />
                    </div>
                    <div id="DOBB">
                        <label htmlFor="ADDOB">A.D: </label>
                        <input type="date" name="ADdob" id="ADdob" value={registerVal.ADdob} onChange={formValChange} />
                    </div>
                </div>
                <p className="error">{valError.DOB}</p>


                <div id="RegFName">
                    <label htmlFor="fName">Father Name: </label>
                    <input type="text" name="fName" id="fName" value={registerVal.fName} onChange={formValChange} />
                </div>
                <p className="error">{valError.fName}</p>

                <div id="RegMName">
                    <label htmlFor="mName">Mother Name: </label>
                    <input type="text" name="mName" id="mName" value={registerVal.mName} onChange={formValChange} />
                </div>
                <p className="error">{valError.mName}</p>

                <div id="addressReg">
                    <div id="RegPAddress">
                        <label htmlFor="pAddress">Permanent Address: </label>
                        <input type="text" name="pAddress" id="pAddress" value={registerVal.pAddress} onChange={formValChange} />
                    </div>
                    <p className="error">{valError.pAddress}</p>

                    <div id="ReglAddress">
                        <label htmlFor="lAddress">Temporary Address: </label>
                        <input type="text" name="lAddress" id="lAddress" value={registerVal.lAddress} onChange={formValChange} />
                    </div>
                    <p className="error">{valError.lAddress}</p>
                </div>

                <div id="Pinfo">
                    <div id="RegPH">
                        <label htmlFor="phNumber">Phone Number: </label>
                        <input type="number" name="phNumber" id="phNumber" value={registerVal.phNumber} onChange={formValChange} />
                        <p className="error" id='phnumberError'>{valError.phNumber}</p>
                    </div>
                    <div id="RegEmail">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" value={registerVal.email} onChange={formValChange} />
                        <p className="error" id='emailError'>{valError.email}</p>
                    </div>
                </div>

                <div id="RegSubBtn">
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>

    )
}

export default RegistrationForm