import axios from "axios";

const BASE_URL = 'https://books-backend.p.goit.global/books/';

export async function getCategoryList() {
    const params = 'category-list';
    return await axios.get(`${BASE_URL}${params}`);
};

export async function getTopBooks() {
    const params = 'top-books';
    return await axios.get(`${BASE_URL}${params}`);
};

export async function getBooksByCategory(selectedCategory) {
    const params = 'category?category=';
    return await axios.get(`${BASE_URL}${params}${selectedCategory}`);
};

export async function getBooksId(idBook) {
    return await axios.get(`${BASE_URL}${idBook}`)
};