import App  from './App';
import './style/index.scss'


const root = document.querySelector('#root');

root.innerHTML = App();

if (document.querySelector('.profile')) {
  document.querySelector('.profile').addEventListener('click', (e) => {
    if (e.target.classList.value === 'profile__content-avatar') {
      document.querySelector('.popup').style.display = 'flex'
    } else if (e.target.classList.value === 'popup' || e.target.tagName === 'BUTTON'){
      document.querySelector('.popup').style.display = 'none'
    }
  })
}

if (document.querySelector('.home')) {
  document.querySelector('.home').addEventListener('click', (e) => {
    if (e.target.id === 'addNewUser') {
      document.querySelector('.popup').style.display = 'flex'
    } else if (e.target.classList.value === 'popup' || e.target.tagName === 'BUTTON'){
      document.querySelector('.popup').style.display = 'none'
    }
  })
}

if (document.querySelector('.home')) {
  document.querySelector('.home').addEventListener('click', (e) => {
    if (e.target.id === 'deleteUser' || e.target.id === 'deleteUserP') {
      document.querySelector('#delete').style.display = 'block'
      document.querySelector('#delete .popup').style.display = 'flex'
    } else if (e.target.classList.value === 'popup' || e.target.tagName === 'BUTTON' || e.target.id == 'delete'){
      document.querySelector('#delete').style.display = 'none'
      document.querySelector('.popup').style.display = 'none'
    }
  })
}

if (document.querySelector('#chat__settings')) {
  document.querySelector('#chat__settings').addEventListener('click', () => {
    document.querySelector('.chat__header-popup').classList.toggle('show')
  })
}

if (document.querySelector('#chat__media')) {
  document.querySelector('#chat__media').addEventListener('click', () => {
    document.querySelector('.chat__footer-popup').classList.toggle('show')
  })
}
