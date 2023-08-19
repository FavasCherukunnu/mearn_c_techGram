import React, { useState } from 'react'
export const MyContext = React.createContext();

export default function ContentDiv() {
    const [topNavHide, setTopNavHide] = useState(false)

    const scrollCallback = (isScrolled) => {
        console.log(isScrolled, topNavHide);
        // if(topNavHide!==isScrolled){
        setTopNavHide(isScrolled);
        // }
    }
    return (
        <MyContext.Provider value={scrollCallback}>

            <div className="userHomePage_outerDiv">


                <div className="topNavBar" bg="light" expand="lg" style={{ height: topNavHide ? '0px' : '60px' }}>
                    {/* <Navbar.Toggle aria-controls="sideNavBarScroll" /> */}

                    {ReturnexpandedButton()}


                    <Stack className="ms-auto" direction="horizontal" gap={3}>
                        <Form >
                            <Stack direction="horizontal" >
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    style={{ display: smallScreen ? 'none' : 'inline' }}
                                />
                                <IconButton>
                                    <BiSearch size={25} />
                                </IconButton>
                            </Stack>
                        </Form>
                        <IconButton><MdOutlineNotificationsNone size={25} /></IconButton>
                        <IconButton onClick={() => navigate('/home')}><BiHomeAlt size={25} /></IconButton>
                    </Stack>
                </div>
                <div className="userHomePage_contentDiv" id="contentDiv" style={{ width: expanded ? 'calc(100vw - 20px)' : smallScreen ? 'calc(100vw - 20px)' : 'calc(100vw - 270px)', paddingTop: topNavHide ? '0px' : '10px', height: topNavHide ? 'calc(100vh - 20px)' : 'calc(100vh - 80px)' }}>
                    <div className="userHomePage_contentInnerDiv">
                        <Outlet />
                    </div>
                </div>
            </div>
        </MyContext.Provider>)
}
