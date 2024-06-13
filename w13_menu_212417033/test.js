import { _supabase } from './clientSupabase_xx.js';
// import menu from './data.js';
// const url = './api/data.json';
// import menu from './data_xx.js';
let testData = [];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const fetchData = async (companyId) => {
  try {
    let { data, error } = await _supabase
      .from('store_xx')
      .select('*, company_xx(*)')
      .eq('companyId', companyId);
    console.log('store_xx data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// const fetchData = async () => {
//   try {
//     const response = await fetch(url);
//     const data = response.json();
//     console.log('fetch data', data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

window.addEventListener('DOMContentLoaded', async () => {
  let cId = 2;
  testData = await fetchData(cId);
  console.log(`companyId=${cId}`, testData);
  // displayMenuItems(menu);
  // displayMenuButtons();
});
