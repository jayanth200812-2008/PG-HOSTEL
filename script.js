const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', mainNav.classList.contains('open'));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

const filters = document.querySelectorAll('.filter');
const roomCards = document.querySelectorAll('.room-card');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(button => button.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    roomCards.forEach(card => {
      card.hidden = selected !== 'all' && card.dataset.type !== selected;
    });
  });
});

document.getElementById('enquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent('PG / Hostel Enquiry - ' + form.get('name'));
  const body = encodeURIComponent(
    `Name: ${form.get('name')}\\nPhone: ${form.get('phone')}\\nRoom preference: ${form.get('room')}\\nMessage: ${form.get('message') || 'No additional message'}`
  );
  document.getElementById('formStatus').textContent = 'Your email app should open with the enquiry prepared. Replace the demo email address in index.html with the property email before publishing.';
  window.location.href = `mailto:hello@staynest.example?subject=${subject}&body=${body}`;
});
