const csrfToken = document.querySelector("meta[name=csrf-token]").content;


async function customFetch(url, options = {}) {
  options.headers = {
    "Content-Type" : "application/json" ,
    "X-CSRF-Token": csrfToken,
    // Your code here
    ...options.headers
  };

  return await fetch(url, options);
  
}

export function followUser(id){
  
 return customFetch(`/users/${id}/follow`, {method: "POST"})
}


export function unfollowUser(id){
  return customFetch(`/users/${id}/follow`, {method: "DELETE"})
}




