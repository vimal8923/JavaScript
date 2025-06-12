async function callAPi() {
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    result = await result.json()
    console.warn(result)
    document.getElementById('userdata').innerHTML = result.map((user) =>
        ` <tr>
                  <td> ${user.name} </td>  
                  <td> ${user.email} </td>  
                  <td>${user.company.name}</td>
                  <td>${`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
                  <td><a href="http://${user.website}" target="_blank">${user.website}</a></td>   
                  </tr>`
    ).join("")
}
callAPi()