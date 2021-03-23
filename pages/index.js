import Link from 'next/link'

function index() {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1">
    <ul>
       <li>
        <Link href="/front">
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          
        </Link>
      </li>
      <li>
        <Link href="/category">
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">category</a>
        </Link>
      </li>
      <li>
        <Link href="/contacts">
          <a>contacts</a>
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default index