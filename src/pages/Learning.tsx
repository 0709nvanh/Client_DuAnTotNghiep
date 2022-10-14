import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getCategoryList } from '../features/Slide/category/CategorySlide'
import '../css/learning.css'
import { ChevronLeftIcon, ChevronRightIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ArrowPathIcon, CheckIcon, ChevronDownIcon, ChevronUpDownIcon, DocumentTextIcon, EllipsisHorizontalIcon, HomeIcon, LockClosedIcon, ShieldCheckIcon, UserPlusIcon } from '@heroicons/react/20/solid'
import { ShoppingBag } from 'heroicons-react'
import { getListMonthSlice } from '../features/Slide/month/MonthSlice'
import { getListWeekSlice, getListWeekSliceByMonth } from '../features/Slide/week/WeekSlice'
import { getListDaySlice, getListDaySliceByWeek } from '../features/Slide/day/DaySlice'
import { MonthType } from '../types/month'
import { WeekType } from '../types/week'
import { DayType } from '../types/day'



const item = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Learning = () => {
  const categories = useAppSelector(item => item.category.value)
  let months = useAppSelector<MonthType[]>(item => item.month.value)
  let weeks = useAppSelector<WeekType[]>(item => item.week.valueByMonth)
  let days = useAppSelector<DayType[]>(item => item.day.valueByWeek)
  const [weekArrSelect, setWeekArrSelect] = useState<WeekType[]>()
  const [dayArrSelect, setDayArrSelect] = useState<DayType[]>()

  const [monthSelect, setMonthSelect] = useState<MonthType>(months.reduce(function (prev, current) {
    return (prev.order < current.order) ? prev : current
  }))
  const [weekSelect, setWeekSelect] = useState<WeekType | null>(weeks.length !== 0 ? weeks.reduce(function (prev, current) {
    return (prev.order < current.order) ? prev : current
  }): null)
  const [daySelect, setDaySelect] = useState<DayType | null>(days.length !== 0 ? days.reduce(function (prev, current) {
    return (prev.order < current.order) ? prev : current
  }): null)

  const dispatch = useAppDispatch()

  console.log("months", months);
  console.log("weeks", weeks);
  console.log("days", days);

  console.log("monthSelect", monthSelect);
  console.log("weekSelect", weekSelect);
  console.log("daySelect", daySelect);



  useEffect(() => {
    dispatch(getCategoryList())
    
    dispatch(getListMonthSlice())
    // const firstMonth = months.reduce(function (prev, current) {
    //   return (prev.order < current.order) ? prev : current
    // })
    // console.log("firstMonth", firstMonth);
    // setMonthSelect(firstMonth)
    dispatch(getListWeekSliceByMonth(monthSelect?._id))
    dispatch(getListDaySliceByWeek(weekSelect?._id))
    console.log("months", months);
    console.log("weeks", weeks);
    console.log("days", days);

    
  }, [monthSelect,weekSelect])
  const [selected, setSelected] = useState(item[3])
  return (
    <div className='learning__page'>
      <div className="box__learning">
        <div>
          <button className="box__learning__title">
            Lớp học tiếng anh giao tiếp 360
          </button>
        </div>
        <div className="content__learning">
          <div className='desc__content__learning'>
            30 ngày làm quen với giao tiếp tiếng Anh
          </div>
          <div className="learning__time">
            <div className='box__learning__time'>
              <div className="learning__btn__time">
                <div className="item__btn__time">
                  <Menu as="div" className="relative inline-block text-left ">
                    <div>
                      <Menu.Button className="relative text-base text-indigo-600 font-semibold w-full flex cursor-default py-2 pr-4 text-left sm:text-lg">
                        {monthSelect?.title} <span className='h-full my-auto'><ChevronDownIcon className='h-5 w-5' /></span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 ml-5 mt-[2px] mr-2 w-56 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                        {months.map((item: MonthType, index: number) => (
                          <Menu.Item >
                            {({ active }) => (
                              <p
                                className={classNames(
                                  active ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                  'group flex items-center px-5 mb-0 pr-3 py-2 text-sm cursor-pointer'
                                )}
                                onClick={() => { setMonthSelect(item) }}
                              >

                                {item.title}
                              </p>
                            )}
                          </Menu.Item>
                        ))}


                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div className="item__btn__time">
                  <Menu as="div" className="relative inline-block text-left ">
                    <div>
                      <Menu.Button className="relative text-base text-indigo-600 font-semibold w-full flex cursor-default py-2 pr-4 text-left sm:text-lg">
                        {weekSelect?.title} <span className='h-full my-auto'><ChevronDownIcon className='h-5 w-5' /></span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 ml-5 mt-[2px] mr-2 w-56 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                        {weeks.map((item: WeekType) => (

                          <Menu.Item >
                            {({ active }) => (
                              <p
                                className={classNames(
                                  active ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                  'group flex items-center px-5 mb-0 pr-3 py-2 text-sm cursor-pointer'
                                )}
                                onClick={() => { setWeekSelect(item) }}
                              >

                                {item.title}
                              </p>
                            )}
                          </Menu.Item>

                        ))}


                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div className="item__btn__time">
                  <Menu as="div" className="relative inline-block text-left ">
                    <div>
                      <Menu.Button className="relative text-base text-indigo-600 font-semibold w-full flex cursor-default py-2 pr-4 text-left sm:text-lg">
                      {daySelect?.title} <span className='h-full my-auto'><ChevronDownIcon className='h-5 w-5' /></span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 ml-5 mt-[2px] mr-2 w-56 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                        {days.map((item: DayType) => (

                          <Menu.Item >
                            {({ active }) => (
                              <p
                                className={classNames(
                                  active ? 'bg-green-100 text-gray-900' : 'text-gray-700',
                                  'group flex items-center px-5 mb-0 pr-3 py-2 text-sm cursor-pointer'
                                )}
                                onClick={() => { setDaySelect(item) }}
                              >

                                {item.title}
                              </p>
                            )}
                          </Menu.Item>

                        ))}


                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="learning__page__time">
                <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <NavLink
                        to="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center border  bg-indigo-600 px-3 py-2 text-sm font-medium text-white focus:z-20"
                      >
                        1
                      </NavLink>
                      <NavLink
                        to="#"
                        className="relative inline-flex items-center border border-gray-300 bg-white  px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                      >
                        2
                      </NavLink>

                      <NavLink
                        to="#"
                        className="relative inline-flex items-center border border-gray-300 bg-white  px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                      >
                        3
                      </NavLink>
                      <NavLink
                        to="#"
                        className="relative inline-flex items-center border border-gray-300 bg-white  px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                      >
                        4
                      </NavLink>

                    </nav>
                  </div>
                </div>

              </div>
            </div>
            <div className="statistical__learning__time">
              <div className="statistical__topic__learning">
                <div className='statistical__topic__learning__title'>
                  <ul>
                    <li>Từ vựng: </li>
                    <li>Cấu trúc và câu: </li>
                    <li>Hội thoại:</li>
                    <li>Ngữ pháp: </li>
                  </ul>
                </div>
                <div className="statistical__topic__learning__point">
                  <ul>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                  </ul>
                </div>
              </div>

              <div className="btn__learning__statistical">
                <button className='btn__start__statistical'>
                  <NavLink to={'/learning/detailLearning'} className='text-white hover:text-white'>
                    Bắt đầu học
                  </NavLink>
                </button>
                <button className='btn__exam__statistical'>
                  Thi Oral ngày
                </button>
              </div>
            </div>
          </div>

          <div className="total__learning">
            <p className='text-cyan-700  font-semibold'>
              Tổng kết nội dung có thể gặt hái được:
            </p>
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Role
                  </th>

                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>



      <div className="box__buy__source">
        <h3 className="title__buy__source">
          <ShoppingBag className='h-5 w-5' />  Lớp học tiếng Anh giao tiếp 360
        </h3>
        <p>
          350,000 ĐỒNG / <span>360 ngày sử dụng</span>
        </p>
        <button className='btn__buy__coures__cart'>
          thanh toán
        </button>
      </div>
    </div>
  )
}

export default Learning