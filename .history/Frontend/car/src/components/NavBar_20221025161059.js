import React from "react";
function Navbar(){ 
return( 
    <div>
<div class="navbar-area">
<div class="container relative">
    <div class="row">
        <div class="w-full">
            <nav class="flex items-center justify-between navbar navbar-expand-lg">
              
                <button class="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                </button>

                <div class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none" id="navbarOne">
                    <ul id="nav" class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                        <li class="nav-item active">
                            <a class="page-scroll" href="#home">hom</a>
                        </li>
                        <li class="nav-item">
                            <a class="page-scroll" href="#features">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="page-scroll" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="page-scroll" href="#facts">Why</a>
                        </li>
                        <li class="nav-item">
                            <a class="page-scroll" href="#team">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="page-scroll" href="#blog">Blog</a>
                        </li>
                    </ul>
                </div>    
            </nav> 
        </div>
    </div> 
</div> 
</div> 
</div>
);
}
export default Navbar;
