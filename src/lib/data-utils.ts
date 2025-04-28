import nigerianDishesData from '@/data/nigerian-dishes.json';
import continentalDishesData from '@/data/continental-dishes.json';
import dessertsData from '@/data/desserts.json';

// Extract the arrays from the imported data
export const nigerianDishes = nigerianDishesData.nigerianDishes || [];
export const continentalDishes = continentalDishesData.continentalDishes || [];
export const desserts = dessertsData.desserts || [];
