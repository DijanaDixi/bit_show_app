export const fetchData=(path)=>{
    const baseUrl= 'http://api.tvmaze.com/shows'
   return  fetch(`${baseUrl}${path}`)
  .then(response => response.json())
  .then(data => console.log(data));
}