import Link from 'next/link'

const NavMenu = () => {
  const menus = [
    {
      title: 'Features',
      path: '/features'
    },
    {
      title: 'Pricing',
      path: '/features'
    },
    {
      title: 'Customer Service',
      path: '/features'
    },
    {
      title: 'About Us',
      path: '/features'
    },
    {
      title: 'Features',
      path: '/features'
    }
  ]

  return (
    <ul>
      {menus.map((menu, i) => (
        <li key={`menu-${i}`}>
          <Link href={menu.path}>
            <a>{menu.title}</a>
          </Link>
        </li>
      ))}

      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            display: inline-block;
            font-size: 16px;
            letter-spacing: 0.1px;
            font-weight: 700;

            a {
              display: inline-block;
              padding: 5px 15px;
              color: rgba(0, 0, 0, 0.6);
            }
          }
        }

        a {
          transition: all 0.2s;
          text-decoration: none;
        }
      `}</style>
    </ul>
  )
}

export default NavMenu
