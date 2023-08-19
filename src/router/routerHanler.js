import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage";
import SignupPage from "../pages/signup/signup";
import { ForNotFor } from "../pages/ForNotFor/ForNotFor";
import LoginPage from "../pages/loginPage/LoginPage";
import UserHomePage from "../pages/user/userHomePage";
import UserWardInfoPage from "../pages/user/pages/wardInfoPage/wardInfoPage";
import UserPanchayathInfoPage from "../pages/user/pages/panchayathInfoPage/panchayathInfoPage";
import { UserLocatePage } from "../pages/user/pages/LocatePage/locatePage";
import { UserSurvayPage } from "../pages/user/pages/survayPage/survayPage";
import { UserHomePage as HomeUser } from "../pages/user/pages/homePage/HomePage";
import { UserWardInfoPageHome } from "../pages/user/pages/wardInfoPage/pages/wardInfoPage/WardInfoPageHome";
import { UserDiscussionPage } from "../pages/user/pages/wardInfoPage/pages/discussionPage/UserDiscussionPage";
import { UserProjectPage } from "../pages/user/pages/wardInfoPage/pages/projectPage/UserProjectPage";
import { UserAnnoucementPage } from "../pages/user/pages/wardInfoPage/pages/annoucementPage/UserAnnoucementPage";
import { UserComplaintPage } from "../pages/user/pages/wardInfoPage/pages/complaintPage/UserComplaintPage";
import { UserGramSabhaPage } from "../pages/user/pages/wardInfoPage/pages/gramSabhaPage/UserGramSabhaPage";
import { UserInstitutePage } from "../pages/user/pages/wardInfoPage/pages/institutesPage/UserInstitutePage";
import { UserUsersPage } from "../pages/user/pages/wardInfoPage/pages/usersPage/UserPage";
import { UserWardInfoPageRoot } from "../pages/user/pages/wardInfoPage/pages/home/UserWardInfoPageRoot";
import { UserPanchayathInfoPageRoot } from "../pages/user/pages/panchayathInfoPage/pages/home/UserPanchayathInfoPageRoot";
import { UserPanchayathInfoPageHome } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathInfoPage/PanchayathInfoPage";
import { UserPanchayathDiscussionPage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathDiscussionPage/UserPanchayathDiscussionPage";
import { UserPanchayathProjectPage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathProjectPage/UserPanchayathProjectPage";
import { UserPanchayathAnnoucementPage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathAnnoucementPage/UserPanchayathAnnoucementPage";
import { UserPanchayathComplaintPage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathComplaintPage/UserPanchayathComplaintPage";
import { UserPanchayathSurvayPage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathSurvayPage/UserPanchayathSurvayPage";
import { UserPanchayathInstitutePage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathInstitutesPage/UserPanchayathInstitutePage";
import { EditUserPage } from "../pages/user/pages/editUserPage/EditUserPage";
import { Editpage2 } from "../pages/user/pages/editUserPage/editPage2";
import { MemberHomePage } from "../pages/member/memberHomePage";
import { HomeMember } from "../pages/member/pages/homePage/HomePage";
import { MemberWardInfoPage } from "../pages/member/pages/wardInfoPage/wardInfoPage";
import { MemberWardInfoPageRoot } from "../pages/member/pages/wardInfoPage/pages/home/UserWardInfoPageRoot";
import { MemberWardInfoPageHome } from "../pages/member/pages/wardInfoPage/pages/wardInfoPage/WardInfoPageHome";
import { MemberDiscussionPage } from "../pages/member/pages/wardInfoPage/pages/discussionPage/UserDiscussionPage";
import { MemberProjectPage } from "../pages/member/pages/wardInfoPage/pages/projectPage/MemberProjectPage";
import { MemberAnnoucementPage } from "../pages/member/pages/wardInfoPage/pages/annoucementPage/MemberAnnoucementPage";
import { MemberComplaintPage } from "../pages/member/pages/wardInfoPage/pages/complaintPage/UserComplaintPage";
import { MemberGramSabhaPage } from "../pages/member/pages/wardInfoPage/pages/gramSabhaPage/MemberGramSabhaPage";
import { MemberInstitutePage } from "../pages/member/pages/wardInfoPage/pages/institutesPage/UserInstitutePage";
import { MemberUsersPage } from "../pages/member/pages/wardInfoPage/pages/usersPage/UserPage";
import { MemberPanchayathInfo } from "../pages/member/pages/panchayathInfoPage/panchayathInfoPage";
import { MemberPanchayathInfoPageRoot } from "../pages/member/pages/panchayathInfoPage/pages/home/UserPanchayathInfoPageRoot";
import { MemberPanchayathInfoPageHome } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathInfoPage/PanchayathInfoPage";
import { MemberPanchayathDiscussionPage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathDiscussionPage/UserPanchayathDiscussionPage";
import { MemberPanchayathProjectPage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathProjectPage/UserPanchayathProjectPage";
import { MemberPanchayathAnnoucementPage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathAnnoucementPage/UserPanchayathAnnoucementPage";
import { MemberPanchayathComplaintPage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathComplaintPage/UserPanchayathComplaintPage";
import { MemberPanchayathSurvayPage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathSurvayPage/UserPanchayathSurvayPage";
import { MemberPanchayathInstitutePage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathInstitutesPage/UserPanchayathInstitutePage";
import { MemberLocatePage } from "../pages/member/pages/LocatePage/locatePage";
import { MemberSurvayPage } from "../pages/member/pages/survayPage/survayPage";
import { MemberOnlyComplaintPage } from "../pages/member/pages/ComplaintPage/UserPanchayathComplaintPage";
import { MemberUserRegistration } from "../pages/member/pages/userRegistration/memberUserRegistration";
import { PresidentHomePage } from "../pages/President/presidentHomePage";
import { HomePresident } from "../pages/President/pages/homePage/HomePage";
import { PresidentWardInfoPage } from "../pages/President/pages/wardInfoPage/wardInfoPage";
import { PresidentWardInfoPageRoot } from "../pages/President/pages/wardInfoPage/pages/home/UserWardInfoPageRoot";
import { PresidentWardInfoPageHome } from "../pages/President/pages/wardInfoPage/pages/wardInfoPage/WardInfoPageHome";
import { PresidentDiscussionPage } from "../pages/President/pages/wardInfoPage/pages/discussionPage/UserDiscussionPage";
import { PresidentProjectPage } from "../pages/President/pages/wardInfoPage/pages/projectPage/MemberProjectPage";
import { PresidentAnnoucementPage } from "../pages/President/pages/wardInfoPage/pages/annoucementPage/MemberAnnoucementPage";
import { PresidentComplaintPage } from "../pages/President/pages/wardInfoPage/pages/complaintPage/UserComplaintPage";
import { PresidentGramSabhaPage } from "../pages/President/pages/wardInfoPage/pages/gramSabhaPage/MemberGramSabhaPage";
import { PresidentInstitutePage } from "../pages/President/pages/wardInfoPage/pages/institutesPage/UserInstitutePage";
import { PresidentUsersPage } from "../pages/President/pages/wardInfoPage/pages/usersPage/UserPage";
import { PresidentPanchayathInfo } from "../pages/President/pages/panchayathInfoPage/panchayathInfoPage";
import { PresidentPanchayathInfoPageRoot } from "../pages/President/pages/panchayathInfoPage/pages/home/UserPanchayathInfoPageRoot";
import { PresidentPanchayathInfoPageHome } from "../pages/President/pages/panchayathInfoPage/pages/PanchayathInfoPage/PanchayathInfoPage";
import { PresidentPanchayathDiscussionPage } from "../pages/President/pages/panchayathInfoPage/pages/PanchayathDiscussionPage/UserPanchayathDiscussionPage";
import { PresidentPanchayathProjectPage } from "../pages/President/pages/panchayathInfoPage/pages/PanchayathProjectPage/UserPanchayathProjectPage";
import { PresidentPanchayathAnnoucementPage } from "../pages/President/pages/panchayathInfoPage/pages/PanchayathAnnoucementPage/UserPanchayathAnnoucementPage";
import { PresidentPanchayathComplaintPage } from "../pages/President/pages/panchayathInfoPage/pages/PanchayathComplaintPage/UserPanchayathComplaintPage";
import { PresidentPanchayathSurvayPage } from "../pages/President/pages/panchayathInfoPage/pages/PanchayathSurvayPage/UserPanchayathSurvayPage";
import { PresidentPanchayathInstitutePage } from "../pages/President/pages/panchayathInfoPage/pages/PanchayathInstitutesPage/UserPanchayathInstitutePage";
import { PresidentLocatePage } from "../pages/President/pages/LocatePage/locatePage";
import { PresidentSurvayPage } from "../pages/President/pages/survayPage/survayPage";
import { PresidentOnlyComplaintPage } from "../pages/President/pages/ComplaintPage/UserPanchayathComplaintPage";
import { PresidentMemberRegistration } from "../pages/President/pages/memberRegistration/memberUserRegistration";
import { AdminPage } from "../pages/AdminPage/loginPage";
import { AdminHomePage } from "../pages/AdminPage/pages/homePage/HomePage";
import { ViewPanchayath } from "../pages/AdminPage/pages/viewPanchayath/ViewPanchayath";
import { EditPanchayath } from "../pages/AdminPage/pages/editPanchayath/EditPanchayath";
import { AdminHomePageRoot } from "../pages/AdminPage/pages/homePage/Home";
import { SelectPresidentPage } from "../pages/AdminPage/pages/createPanchayath/pages/SelectPresidentPage";
import { EditAdminPage, EditPresidentPage } from "../pages/President/pages/editUserPage/EditUserPage";
import { EditPresidentpage2 } from "../pages/President/pages/editUserPage/editPage2";
import { CreateWard } from "../pages/President/pages/memberRegistration/pages/createWard/CreatePanchayath";
import { CreatePanchayath } from "../pages/AdminPage/pages/createPanchayath/CreatePanchayath";
import { EditWard } from "../pages/President/pages/memberRegistration/pages/editWard/editWard";
import { PresidentUserRegistration } from "../pages/President/pages/userRegistration/PresidentUserRegistration";
import { EditMemberpage2 } from "../pages/member/pages/editUserPage/editPage2";
import { EditMemberPage } from "../pages/member/pages/editUserPage/EditUserPage";
import { InspectPageRoot } from "../pages/inpectPage/inspectPage";
import { InspectPanchayathPageRoot } from "../pages/inpectPage/inpectPanchayathPage";



export function RouterHandler() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="signUp" element={<SignupPage />} />
                    <Route path="login" element={<LoginPage />} />
                    {/* <Route path="template" element={<HomeTemplate />} /> */}
                    <Route path="editUser" element={<EditUserPage />} />
                    <Route path="editProfile" element={<Editpage2 />} />
                    <Route path="Admin">
                        <Route index element={<AdminPage />} />
                        <Route path="home" element={<AdminHomePage />}>
                            <Route path="" element={<AdminHomePageRoot />} />
                            <Route path="createPanchayath">
                                <Route path="" element={<CreatePanchayath />} />
                                <Route path="selectPresident/:panchayathId" element={<SelectPresidentPage />} />
                            </Route>
                            <Route path="viewPanchayath" element={<ViewPanchayath />} />
                            <Route path="editPanchayath/:id" element={<EditPanchayath />} />
                        </Route>
                    </Route>
                    <Route path="user">
                        <Route path="home" element={<UserHomePage />}>
                            <Route path="" element={<HomeUser />} />
                            <Route path="wardInfo" element={<UserWardInfoPage />}>
                                <Route path="" element={<UserWardInfoPageRoot />} />
                                <Route path="Ward Info" element={<UserWardInfoPageHome />} />
                                <Route path="Discussion" element={<UserDiscussionPage />} />
                                <Route path="Project" element={<UserProjectPage />} />
                                <Route path="Announcement" element={<UserAnnoucementPage />} />
                                <Route path="Complaint" element={<UserComplaintPage />} />
                                <Route path="Gram Sabha" element={<UserGramSabhaPage />} />
                                <Route path="Institutes" element={<UserInstitutePage />} />
                                <Route path="Users" element={<UserUsersPage />} />
                            </Route>
                            <Route path="panchayathInfo" element={<UserPanchayathInfoPage />} >
                                <Route path="" element={<UserPanchayathInfoPageRoot />} />
                                <Route path="Panchayath Info" element={<UserPanchayathInfoPageHome />} />
                                <Route path="Discussion" element={<UserPanchayathDiscussionPage />} />
                                <Route path="Project" element={<UserPanchayathProjectPage />} />
                                <Route path="Announcement" element={<UserPanchayathAnnoucementPage />} />
                                <Route path="Complaint" element={<UserPanchayathComplaintPage />} />
                                <Route path="Survay" element={<UserPanchayathSurvayPage />} />
                                <Route path="Institutes" element={<UserPanchayathInstitutePage />} />
                            </Route>
                            <Route path="locate" element={<UserSurvayPage />} />
                            <Route path="survay" element={<UserLocatePage />} />
                        </Route>
                        <Route path="editProfile" element={<Editpage2 />} />
                        <Route path="editUser" element={<EditUserPage />} />
                    </Route>
                    <Route path="member">
                        <Route path="home" element={<MemberHomePage />}>
                            <Route path="" element={<HomeMember />} />
                            {/* <Route path="wardInfo" element={<MemberWardInfoPage />}>
                                <Route path="" element={<MemberWardInfoPageRoot />} />
                                <Route path="Ward Info" element={<MemberWardInfoPageHome />} />
                                <Route path="Discussion" element={<MemberDiscussionPage />} />
                                <Route path="Project" element={<MemberProjectPage />} />
                                <Route path="Announcement" element={<MemberAnnoucementPage />} />
                                <Route path="Complaint" element={<MemberComplaintPage />} />
                                <Route path="Gram Sabha" element={<MemberGramSabhaPage />} />
                                <Route path="Institutes" element={<MemberInstitutePage />} />
                                <Route path="Users" element={<MemberUsersPage />} />
                            </Route> */}
                            <Route path="wardInfo" element={<PresidentWardInfoPage />}>
                                <Route path="" element={<MemberWardInfoPageRoot />} />
                                <Route path="Ward Info" element={<PresidentWardInfoPageHome />} />
                                <Route path="Discussion" element={<PresidentDiscussionPage />} />
                                <Route path="Project" element={<PresidentProjectPage />} />
                                <Route path="Announcement" element={<PresidentAnnoucementPage />} />
                                <Route path="Complaint" element={<PresidentComplaintPage />} />
                                <Route path="Gram Sabha" element={<PresidentGramSabhaPage />} />
                                <Route path="Institutes" element={<PresidentInstitutePage />} />
                                <Route path="Users" element={<PresidentUsersPage />} />
                            </Route>
                            <Route path="panchayathInfo" element={<MemberPanchayathInfo />} >
                                <Route path="" element={<MemberPanchayathInfoPageRoot />} />
                                <Route path="Panchayath Info" element={<UserPanchayathInfoPageHome />} />
                                <Route path="Discussion" element={<UserPanchayathDiscussionPage />} />
                                <Route path="Project" element={<UserPanchayathProjectPage />} />
                                <Route path="Announcement" element={<UserPanchayathAnnoucementPage />} />
                                <Route path="Complaint" element={<UserPanchayathComplaintPage />} />
                                <Route path="Survay" element={<UserPanchayathSurvayPage />} />
                                <Route path="Institutes" element={<UserPanchayathInstitutePage />} />
                            </Route>
                            <Route path="locate" element={<UserSurvayPage />} />
                            <Route path="survay" element={<UserLocatePage />} />
                            <Route path="complaints" element={<PresidentComplaintPage />} />
                            <Route path="User Registration" element={<MemberUserRegistration />} >
                                <Route path="" element={<MemberUserRegistration />} />
                            </Route>
                        </Route>
                        <Route path="editProfile" element={<Editpage2 />} />
                        <Route path="editUser" element={<EditUserPage />} />
                    </Route>
                    <Route path="president">
                        <Route path="home" element={<PresidentHomePage />}>
                            <Route path="" element={<HomePresident />} />
                            <Route path="wardInfo" element={<PresidentWardInfoPage />}>
                                <Route path="" element={<PresidentWardInfoPageRoot />} />
                                <Route path="Ward Info" element={<PresidentWardInfoPageHome />} />
                                <Route path="Discussion" element={<PresidentDiscussionPage />} />
                                <Route path="Project" element={<PresidentProjectPage />} />
                                <Route path="Announcement" element={<PresidentAnnoucementPage />} />
                                <Route path="Complaint" element={<PresidentComplaintPage />} />
                                <Route path="Gram Sabha" element={<PresidentGramSabhaPage />} />
                                <Route path="Institutes" element={<PresidentInstitutePage />} />
                                <Route path="Users" element={<PresidentUsersPage />} />
                            </Route>
                            <Route path="panchayathInfo" element={<PresidentPanchayathInfo />} >
                                <Route path="" element={<PresidentPanchayathInfoPageRoot />} />
                                <Route path="Panchayath Info" element={<PresidentPanchayathInfoPageHome />} />
                                <Route path="Discussion" element={<PresidentPanchayathDiscussionPage />} />
                                <Route path="Project" element={<PresidentPanchayathProjectPage />} />
                                <Route path="Announcement" element={<PresidentPanchayathAnnoucementPage />} />
                                <Route path="Complaint" element={<PresidentPanchayathComplaintPage />} />
                                <Route path="Survay" element={<UserPanchayathSurvayPage />} />
                                <Route path="Institutes" element={<PresidentPanchayathInstitutePage />} />
                            </Route>
                            <Route path="locate" element={<UserSurvayPage />} />
                            <Route path="survay" element={<UserLocatePage />} />
                            <Route path="complaints" element={<PresidentPanchayathComplaintPage isMain/>} />
                            <Route path="Member Registration" >
                                <Route path="" element={<PresidentMemberRegistration />} />
                                <Route path="createWard" element={<CreateWard />} />
                                <Route path="editWard/:id" element={<EditWard />} />
                            </Route>
                            <Route path="User Registration" >
                                <Route path="" element={<PresidentUserRegistration />} />
                            </Route>
                        </Route>
                        <Route path="editProfile" element={<Editpage2 />} />
                        <Route path="editUser" element={<EditUserPage />} />
                    </Route>
                    <Route path="inspect/ward/:wardId" element={<InspectPageRoot />}>
                        <Route path="" element={<UserWardInfoPage />}>
                            <Route path="" element={<UserWardInfoPageRoot />} />
                            <Route path="Ward Info" element={<UserWardInfoPageHome />} />
                            <Route path="Discussion" element={<UserDiscussionPage />} />
                            <Route path="Project" element={<UserProjectPage />} />
                            <Route path="Announcement" element={<UserAnnoucementPage />} />
                            <Route path="Complaint" element={<UserComplaintPage />} />
                            <Route path="Gram Sabha" element={<UserGramSabhaPage />} />
                            <Route path="Institutes" element={<UserInstitutePage />} />
                            <Route path="Users" element={<UserUsersPage />} />
                        </Route>
                    </Route>
                    <Route path="inspect/panchayath/:panchayathId" element={<InspectPanchayathPageRoot />}>
                        <Route path="" element={<UserPanchayathInfoPage />} >
                            <Route path="" element={<UserPanchayathInfoPageRoot />} />
                            <Route path="Panchayath Info" element={<UserPanchayathInfoPageHome />} />
                            <Route path="Discussion" element={<UserPanchayathDiscussionPage />} />
                            <Route path="Project" element={<UserPanchayathProjectPage />} />
                            <Route path="Announcement" element={<UserPanchayathAnnoucementPage />} />
                            <Route path="Complaint" element={<UserPanchayathComplaintPage />} />
                            <Route path="Survay" element={<UserPanchayathSurvayPage />} />
                            <Route path="Institutes" element={<UserPanchayathInstitutePage />} />
                        </Route>
                    </Route>
                </Route>
                <Route path="*" element={<ForNotFor />} />
            </Routes>
        </BrowserRouter>
    );

}