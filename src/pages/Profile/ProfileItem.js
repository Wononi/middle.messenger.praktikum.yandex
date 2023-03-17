import Handlebars from 'handlebars';

const ProfileItem = (name, value, type, apiName) => {
  if (window.location.pathname === '/profile/user-data') {
    return Handlebars.compile(`
    <div class="profile__content-item">
        <p>${name}</p>
        <input type="${type}" value="${value}" name="${apiName}">
    </div>
  `)()
  }
  if (window.location.pathname === '/profile/user-password') {
    return Handlebars.compile(`
    <div class="profile__content-item">
        <p>${name}</p>
        <input type="${type}" value="${value}" name="${apiName}">
    </div>
  `)()
  }
  return Handlebars.compile(`
    <div class="profile__content-item">
        <p>${name}</p>
        <p>${value}</p>
    </div>
  `)()
}

export default ProfileItem