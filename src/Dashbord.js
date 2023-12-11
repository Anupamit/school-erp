import React from 'react'

const Dashbord = () => {
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row-Container">
                        <div className="col-2">
                            <h4 className="card-title mb-3 flex-grow-1">Dashbord</h4>
                        </div>
                    </div>
                    <div className="row-Container">
                        <div className="col-2">
                            <div className="h-100">
                                <div className="row-Container2 mb-5">
                                    <div className="col">
                                        <div className="py-4 px-3 border border-primary rounded">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1  ">
                                                    <h2 className="mb-0 text-primary">328</h2>
                                                    <p className="text-primary">Total Students</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="py-4 px-3 border border-primary rounded">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 ">
                                                    <h2 className="mb-0 text-primary">100</h2>
                                                    <p className="text-primary"> Total Fee Pending</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="py-4 px-3 border border-primary rounded">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h2 className="mb-0 text-primary">6054</h2>
                                                    <p className="text-primary"> Collection This Month</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="py-4 px-3 border border-primary rounded">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 ">
                                                    <h2 className="mb-0 text-primary">2</h2>
                                                    <p className="text-primary">New Addmissions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="py-4 px-3 border border-primary rounded">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1  ">
                                                    <h2 className="mb-0 text-primary">100000</h2>
                                                    <p className="text-primary"> Total Expense </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row-Container-3">
                                    <div className="col-xl-8">
                                        <div className="card">
                                            <div className="p-3 align-items-center d-flex">
                                                <h4 className="mb-0 flex-grow-1">Notifications</h4>
                                            </div>
                                            <hr className="mb-0" />

                                            <div className="align-items-center d-flex">
                                                <div className="flex-shrink-0 ms-2">
                                                    <ul
                                                        className="nav justify-content-start nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                                        role="tablist"
                                                    >
                                                        <li className="nav-item">
                                                            <a
                                                            href='/'
                                                                className="nav-link"
                                                                data-bs-toggle="tab"
                                                                // onClick={() => setshowTab("partner")}
                                                            >
                                                                Notifs
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashbord