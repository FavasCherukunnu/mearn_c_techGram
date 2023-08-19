
export function isLogedIn(err){
    if(getAdminToken()===undefined){
        return false;   //not logged in
    }
    if(err.response){
        if(err.response.status===401){
            console.log('not logged in');
            return false        //not logged in
        }else{
            return true;
        }
    }
    return null;    //network error
}

export function checkLoggedIn(err){
    if(getAdminToken()===undefined){
        loginUser();
        window.location = '/login'
        alert('Not logged In. login First');
        return false;   //not logged in
    }
    if(err.response){
        if(err.response.status===401){
            console.log('not logged in');
            loginUser();
            window.location = '/login'
            alert('Not logged In. login First');
            return false;   //not logged in
        }else{
            return err.response.data.message?err.response.data.message:'somthing went wrong';
        }
    }
    return 'Network Error';    //network error
}

export function getAdminToken(){
    return localStorage.getItem('x-auth-token')
}
export function logoutAdmin(){
    return localStorage.removeItem('x-auth-token');
}


export function getUserToken(){
    return localStorage.getItem('u-auth-token')
}
export function loginUser(token){
    return localStorage.setItem('u-auth-token',token)
}
export function logoutUser(){
    return localStorage.removeItem('u-auth-token');
}

export function removeFirstEqualString(firstString, secondString) {
    if (firstString.startsWith(secondString)) {
      return firstString.slice(secondString.length);
    } else {
      return null;
    }
  }