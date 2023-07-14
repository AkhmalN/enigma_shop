import React from 'react'

function Footer() {
   return (
      <div>
         <footer class="bg-dark text-light text-center py-3">
            <p>&copy; {new Date().getFullYear()} E-commerce Store. All rights reserved.</p>
         </footer>
      </div>
   )
}

export default Footer
