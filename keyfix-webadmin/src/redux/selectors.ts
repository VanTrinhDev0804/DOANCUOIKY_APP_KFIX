import { createSelector } from "@reduxjs/toolkit";
import { store } from "./store";

export const dateSelector = (state: { filter: { dataFilter: { date: any; }; }; }) => state.filter.dataFilter.date
export const monthSelector = (state: { filter: { dataFilter: { month: any; }; }; }) => state.filter.dataFilter.month
export const yearSelector = (state: { filter: { dataFilter: { year: any; }; }; }) => state.filter.dataFilter.year
export const ordersSelector = (state: { orders: { dataOrders: any; }; }) => state.orders.dataOrders

export const keyerSelector = (state: { thoSuaKhoa: { dataThoSuaKhoa: any; }; }) => state.thoSuaKhoa.dataThoSuaKhoa
export const searchSelector = (state: { search: { searchPhone: any; }; }) => state.search.searchPhone


export const ordersRemainingSelector = createSelector(
    ordersSelector,
    dateSelector,
    monthSelector,
    yearSelector,
    (orders,date,month,year) => {
    
        if(date === '' && month === '' && year === ''){
            //console.log(123);
            return orders
        }
        if(date !== ''){
            return orders.filter((order: any) => {
                return (order.createAt.split(",")[1].trim() === date) 
            })
        }
        if(month !== '' && year !== '') {
            return orders.filter((order: any) => {
                return (order.createAt.split(",")[1].trim().split("/")[1] === month && order.createAt.split(",")[1].trim().split("/")[2] === year) 
            })
        }
        if(year !=='') {
            return orders.filter((order: any) => {
                return order.createAt.split(",")[1].trim().split("/")[2] === year
            })
        }
        return {}   
    }
)

export const keyerRemainingSelector = createSelector(
    keyerSelector,
    searchSelector,
    (keyers, search) => {
        if(search === ''){
            return keyers
        } else {
            return keyers.filter((keyer: { phone: string | any[]; }) => keyer.phone.includes(search))
        }
    }
)