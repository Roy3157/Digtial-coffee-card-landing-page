

const client = contentful.createClient({
  space: 'at54kb6wa6cn',
  

  accessToken: 'GUfjJ0f6YoW0t_wgHbKO-FIqLycE-J1C9PEmAtE6CRU'
})

client.getEntry('1Ca8kgPxVeZCcnU7O1LLuQ')
  .then((entry) => {
    //render fields to the correct place
    console.log(entry.fields)
    let pageTitle = entry.fields.pageTitle;
    let heroSubtitle = entry.fields.subtitle
    let heroimageurl = entry.fields.heroImage.fields.file.url
    document.getElementById('hero-title').innerHTML = pageTitle;
    document.getElementById('hero-subTitle').innerHTML = heroSubtitle;
    document.getElementById('hero-image').src = heroimageurl;
    


  })
  .catch(console.error)