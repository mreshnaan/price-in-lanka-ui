import SearchFilter from '../components/Cards/searchFilter'
import Banner from '../components/Cards/Banner'
import Cards from '../components/Cards/category/Cards'
import Selectoption from '../components/Cards/Selectoption'
import Searchbar from '../components/Cards/Seachbar'




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
          image: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_multiple_products/laptop/new-category-page-notebook-alienware-m15-r3-m17-r3-800x620.png?fmt=png-alpha&amp;wid=800&amp;hei=620",
          tags: [{ name: "#Elecricity" }],
          url: '/category/electronics/laptops'

        },
        {
          id: '33',
          name: "Television",
          description: 'Don St, Brooklyn, New York',
          image: "https://p.globalsources.com/IMAGES/PDT/BIG/947/B1144160947.jpg",
          tags: [{ name: "#Elecricity" }],
          url: 'category/electronics/television'

        },
        {
          id: '34',
          name: "Tablets",
          description: 'Don St, Brooklyn, New York',
          image: "https://baseo.co.uk/wp-content/uploads/2019/08/Amazon-Kindle-Fire-HD-10.jpg",
          tags: [{ name: "#Elecricity" }],
          url: 'category/electronics/tablet'

        },
        {
          id: '35',
          name: "Mobile",
          description: 'Don St, Brooklyn, New York',
          image: "https://qph.fs.quoracdn.net/main-qimg-968c26fb806e35f0f0477328db6f72d8",
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
          image: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_multiple_products/laptop/new-category-page-notebook-alienware-m15-r3-m17-r3-800x620.png?fmt=png-alpha&amp;wid=800&amp;hei=620",
          tags: [{ name: "#Elecricity" }],
          url: '/category/electronics/laptops'

        },
        {
          id: '33',
          name: "Television",
          description: 'Don St, Brooklyn, New York',
          image: "https://p.globalsources.com/IMAGES/PDT/BIG/947/B1144160947.jpg",
          tags: [{ name: "#Elecricity" }],
          url: 'category/electronics/television'

        },
        {
          id: '34',
          name: "Tablets",
          description: 'Don St, Brooklyn, New York',
          image: "https://baseo.co.uk/wp-content/uploads/2019/08/Amazon-Kindle-Fire-HD-10.jpg",
          tags: [{ name: "#Elecricity" }],
          url: 'category/electronics/tablet'

        },
        {
          id: '35',
          name: "Mobile",
          description: 'Don St, Brooklyn, New York',
          image: "https://qph.fs.quoracdn.net/main-qimg-968c26fb806e35f0f0477328db6f72d8",
          tags: [{ name: "#Elecricity" }],
          url: 'category/electronics/mobile'

        },
      ],
    }
  ]


  return (
    <div>

      <Banner items={banner} />
      <div className="w-100% flex justify-center items-center h-24">
        <div className="flex justify-center items-center w-5/6 p-5 ">
          <Selectoption />
          <Selectoption />
          <Selectoption />

          <SearchFilter />
          {/* <Searchbar /> */}

        </div>
      </div>

      <Cards items={category} />


    </div>
  )

}
