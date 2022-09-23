import React from 'react';
function Template2() {
    return (
        <>
            <div className="main">
                <div className="row flexAIC flexSA">
                    <div className="logo w33"><img src="logo.png" alt="" /></div>
                    <div className="row flexAIC w50 flexEnd ">
                        <button className="btn btn-trans">Solution</button>
                        <button className="btn btn-trans">Product</button>
                        <button className="btn btn-trans">Resources</button>
                        <button className="btn btn-trans">Company</button>
                        <button className="btn btn-trans">Get Started</button>
                        <button className="btn btn-trans"><i class="fa fa-search" aria-hidden="true"></i>Search</button>
                    </div>
                </div>
                <div className="row w100 flexSB">
                    <div className="col w33 " style={{ paddingLeft: "6%", marginTop: "5%" }}>
                        <h1 className='heading m1'>Get Started With </h1>
                        <h1 className='heading m1'>Apptio Today</h1>
                        <p className='subheading m1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laudantium possimus voluptates nam fugit repellat impedit nihil ut nisi architecto!</p>
                    </div>
                    <div className="row w50  flexSB" style={{paddingLeft:"100px"}}>

                        <div className="col w50">
                            <div className="row w100">
                                <div className="col w50"><input type="text" placeholder='First Name'/></div>
                                <div className="col w50"><input type="text" placeholder='Last Name'/></div>
                            </div>
                            <div className="row w100">
                                <div className="col w50"><input type="text" placeholder='Work Mail'/></div>
                                <div className="col w50"><input type="text" placeholder='Phone'/></div>
                            </div>
                            <div className="row w100">
                                <div className="col w50"><input type="text" placeholder='Company'/></div>
                                <div className="col w50"><input type="number" placeholder='Job Function'/></div>
                            </div>
                            <input type="number" placeholder='Country'/>
                            <textarea name="" id="" cols="30" rows="4" placeholder='How Can We Help?'></textarea>
                            <button className="btn clr2 w60 fclWhite p3" style={{marginTop:"20px"}}>Get Started</button>
                        </div>
                        <div className="col flexJCC">
                            <div className="box row flexJCC flexAIC " style={{backgroundColor:"#05395d"}}><i class="fa fa-whatsapp" aria-hidden="true"></i></div>
                            <div className="box row flexJCC flexAIC clr2"><i class="fa fa-television" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Template2;