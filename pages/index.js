import { useState } from "react"
import Slider from '../components/Cards/Slider'
import Banner from '../components/Cards/Banner'
import Cards from '../components/Cards/category/Cards'




export default function Home() {

  const banner = [
    {
      image: 'https://boards.rooster.jobs/static/header-illustration.svg',
      content: 'You can buy, sell anything you want!'
    }
  ]
  const slider = [
    {
      id: '1',
      name: 'Apple',
      image: "https://www.ideabeam.com/images/brand/apple.jpg",
      url: '',
    },

  ]

  const category = [
    {
      id: '2',
      ctitle: 'Elecricity',
      subcats: [

        {
          id: '32',
          name: "Laptops",
          description: 'Don St, Brooklyn, New York',
          image: "http://priceinlanka.com/images/CategoriesImages/Laptops.jpg",
          tags: [{ name: "#Elecricity" }],
          url: '/category/electronics/laptops'

        },
        {
          id: '33',
          name: "Television",
          description: 'Don St, Brooklyn, New York',
          image: "http://priceinlanka.com/images/CategoriesImages/Television.jpg",
          tags: [{ name: "#Elecricity" }],
          url: 'category/electronics/television'

        },
        {
          id: '34',
          name: "Tablets",
          description: 'Don St, Brooklyn, New York',
          image: "http://priceinlanka.com/images/CategoriesImages/Tablets.jpg",
          tags: [{ name: "#Elecricity" }],
          url: 'category/electronics/tablet'

        },
        {
          id: '35',
          name: "Mobile",
          description: 'Don St, Brooklyn, New York',
          image: "http://priceinlanka.com/images/CategoriesImages/Mobile.png",
          tags: [{ name: "#Elecricity" }],
          url: 'category/electronics/mobile'

        },
      ],
    },
    {
      id: '3',
      ctitle: 'AutoMobile',
      subcats: [

        {
          id: '32',
          name: "Laptops",
          description: 'Don St, Brooklyn, New York',
          image: "http://priceinlanka.com/images/CategoriesImages/Laptops.jpg",
          tags: [{ name: "#Elecricity" }]

        },
        {
          id: '33',
          name: "Television",
          description: 'Don St, Brooklyn, New York',
          image: "http://priceinlanka.com/images/CategoriesImages/Television.jpg",
          tags: [{ name: "#Elecricity" }]

        },
        {
          id: '34',
          name: "Tablets",
          description: 'Don St, Brooklyn, New York',
          image: "http://priceinlanka.com/images/CategoriesImages/Tablets.jpg",
          tags: [{ name: "#Elecricity" }]

        },
        {
          id: '35',
          name: "Mobile",
          description: 'Don St, Brooklyn, New York',
          image: "http://priceinlanka.com/images/CategoriesImages/Mobile.png",
          tags: [{ id: '1', name: "#Elecricity" }]

        },
      ],
    }
  ]


  return (
    <div>

      <Banner items={banner} />
      <Cards items={category} />


    </div>
  )

}
