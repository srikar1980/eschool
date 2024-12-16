export const getLocalStorage = (KEY='temp')=>{
  if(typeof window !== 'undefined'){
    const current = localStorage.getItem(KEY);
    try {
      return current === null ? null:JSON.parse(current);
    } catch (error) {
      return current === null ? null:current;
    }
  }
  return null;
}

export const setLocalStorage = (KEY='temp',data)=>{
  if(typeof window !== 'undefined'){
    if(data===undefined){
      return localStorage.removeItem(KEY);
    }
    // clean up the user object from sensitive data before storing it :)

    return localStorage.setItem(KEY,JSON.stringify(data))
  }
  return null;
}

export const removeLocalStorage = (KEY='temp')=>{
  if(typeof window !== 'undefined'){
    const current = localStorage.getItem(KEY);
    if(current) localStorage.removeItem(KEY);
  }
  return null;
}

export const clearLocalStorage = ()=>{
  if(typeof window !=='undefined'){
    localStorage.clear();
  }
  return null;
}

export default {getLocalStorage,setLocalStorage,removeLocalStorage,clearLocalStorage}