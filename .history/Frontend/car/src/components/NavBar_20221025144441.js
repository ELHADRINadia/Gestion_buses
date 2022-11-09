import React from "react";
function Navbar(){ 
return( 
<div class="hidden preloader">
        <div class="loader">
            <div class="ytp-spinner">
                <div class="ytp-spinner-container">
                    <div class="ytp-spinner-rotator">
                        <div class="ytp-spinner-left">
                            <div class="ytp-spinner-circle"></div>
                        </div>
                        <div class="ytp-spinner-right">
                            <div class="ytp-spinner-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--====== PRELOADER PART ENDS ======-->
    
    <!--====== HEADER PART START ======-->
    
    <header class="header-area">
        <div class="navbar-area">
            <div class="container relative">
                <div class="row">
                    <div class="w-full">
                        <nav class="flex items-center justify-between navbar navbar-expand-lg">
                            <a class="mr-4 navbar-brand" href="index.html">
                                <img src="assets/images/logo.svg" alt="Logo">
                            </a>
                            <button class="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none" id="navbarOne">
                                <ul id="nav" class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                    <li class="nav-item active">
                                        <a class="page-scroll" href="#home">Home</a>
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
                            </div> <!-- navbar collapse -->
                            
                            <div class="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
                                <a class="main-btn gradient-btn" data-scroll-nav="0" href="#" rel="nofollow">Download Now</a>
                            </div>
                        </nav> <!-- navbar -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- navbar area -->
        
        <div id="home" class="header-hero" style="background-image: url(assets/images/banner-bg.svg)">
            <div class="container">
                <div class="justify-center row">
                    <div class="w-full lg:w-2/3">
                        <div class="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
                            <h3 class="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Basic - SaaS Landing Page</h3>
                            <h2 class="mb-3 text-4xl font-bold text-white header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Kickstart Your SaaS or App Site</h2>
                            <p class="mb-8 text-white text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            <a href="#" class="main-btn gradient-btn gradient-btn-2 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">Get Started</a>
                        </div> <!-- header hero content -->
                    </div>
                </div> <!-- row -->
                <div class="justify-center row">
                    <div class="w-full lg:w-2/3">
                        <div class="text-center header-hero-image wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                            <img src="assets/images/header-hero.png" alt="hero">
                        </div> <!-- header hero image -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
            <div id="particles-1" class="particles"></div>
        </div> <!-- header hero -->
    </header>
    
    <!--====== HEADER PART ENDS ======-->
    
    <!--====== BRAMD PART START ======-->
    
    <div class="pt-24 brand-area">
        <div class="container">
            <div class="row">
                <div class="w-full">
                    <div class="items-center justify-center row lg:justify-between">
                        <div class="single-logo hover:opacity-100 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <img src="assets/images/brand-1.png" alt="brand">
                        </div> <!-- single logo -->
                        <div class="single-logo hover:opacity-100 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                            <img src="assets/images/brand-2.png" alt="brand">
                        </div> <!-- single logo -->
                        <div class="single-logo hover:opacity-100 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.3s">
                            <img src="assets/images/brand-3.png" alt="brand">
                        </div> <!-- single logo -->
                        <div class="single-logo hover:opacity-100 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <img src="assets/images/brand-4.png" alt="brand">
                        </div> <!-- single logo -->
                        <div class="single-logo hover:opacity-100 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                            <img src="assets/images/brand-5.png" alt="brand">
                        </div> <!-- single logo -->
                    </div> <!-- brand logo -->
                </div>
            </div>   <!-- row -->
        </div> <!-- container -->
    </div>
    
    <!--====== BRAMD PART ENDS ======-->
    
    <!--====== SERVICES PART START ======-->
    
    <section id="features" class="services-area pt-120">
        <div class="container">
            <div class="justify-center row">
                <div class="w-full lg:w-2/3">
                    <div class="pb-10 text-center section-title">
                        <div class="m-auto line"></div>
                        <h3 class="title">Clean and simple design, <span> Comes with everything you need to get started!</span></h3>
                    </div> <!-- section title -->
                </div>
            </div> <!-- row -->
            <div class="justify-center row">
                <div class="w-full sm:w-2/3 lg:w-1/3">
                    <div class="single-services wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div class="services-icon">
                            <img class="shape" src="assets/images/services-shape.svg" alt="shape">
                            <img class="shape-1" src="assets/images/services-shape-1.svg" alt="shape">
                            <i class="lni lni-baloon"></i>
                        </div>
                        <div class="mt-8 services-content">
                            <h4 class="mb-8 text-xl font-bold text-gray-900">Clean</h4>
                            <p class="mb-8">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                            <a class="duration-300 hover:text-theme-color" href="javascript:void(0)">Learn More <i class="ml-2 lni lni-chevron-right"></i></a>
                        </div>
                    </div> <!-- single services -->
                </div>
                <div class="w-full sm:w-2/3 lg:w-1/3">
                    <div class="mt-8 text-center single-services wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div class="services-icon">
                            <img class="shape" src="assets/images/services-shape.svg" alt="shape">
                            <img class="shape-1" src="assets/images/services-shape-2.svg" alt="shape">
                            <i class="lni lni-cog"></i>
                        </div>
                        <div class="mt-8 services-content">
                            <h4 class="mb-8 text-xl font-bold text-gray-900">Robust</h4>
                            <p class="mb-8">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                            <a class="duration-300 hover:text-theme-color" href="javascript:void(0)">Learn More <i class="ml-2 lni lni-chevron-right"></i></a>
                        </div>
                    </div> <!-- single services -->
                </div>
                <div class="w-full sm:w-2/3 lg:w-1/3">
                    <div class="mt-8 text-center single-services wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div class="services-icon">
                            <img class="shape" src="assets/images/services-shape.svg" alt="shape">
                            <img class="shape-1" src="assets/images/services-shape-3.svg" alt="shape">
                            <i class="lni lni-bolt-alt"></i>
                        </div>
                        <div class="mt-8 services-content">
                            <h4 class="mb-8 text-xl font-bold text-gray-900">Powerful</h4>
                            <p class="mb-8">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                            <a class="duration-300 hover:text-theme-color" href="javascript:void(0)">Learn More <i class="ml-2 lni lni-chevron-right"></i></a>
                        </div>
                    </div> <!-- single services -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>
    
    <!--====== SERVICES PART ENDS ======-->
    
    <!--====== ABOUT PART START ======-->
    
    <section id="about" class="relative pt-20 about-area">
        <div class="container">
            <div class="row">
                <div class="w-full lg:w-1/2">
                    <div class="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div class="mb-4 section-title">
                            <div class="line"></div>
                            <h3 class="title">Quick & Easy <span>to Use Tailwind Template</span></h3>
                        </div> <!-- section title -->
                        <p class="mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                        <a href="javascript:void(0)" class="main-btn gradient-btn">Try it Free</a>
                    </div> <!-- about content -->
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src="assets/images/about1.svg" alt="about">
                    </div> <!-- about image -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
        <div class="about-shape-1">
            <img src="assets/images/about-shape-1.svg" alt="shape">
        </div>
    </section>
    
    <!--====== ABOUT PART ENDS ======-->
    
    <!--====== ABOUT PART START ======-->
    
    <section class="relative pt-20 about-area">
        <div class="about-shape-2">
            <img src="assets/images/about-shape-2.svg" alt="shape">
        </div>
        <div class="container">
            <div class="row">
                <div class="w-full lg:w-1/2 lg:order-last">
                    <div class="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div class="mb-4 section-title">
                            <div class="line"></div>
                            <h3 class="title">Modern design <span> with Essential Features</span></h3>
                        </div> <!-- section title -->
                        <p class="mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                        <a href="javascript:void(0)" class="main-btn gradient-btn">Try it Free</a>
                    </div> <!-- about content -->
                </div>
                <div class="w-full lg:w-1/2 lg:order-first">
                    <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src="assets/images/about2.svg" alt="about">
                    </div> <!-- about image -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>


    <!--====== ABOUT PART START ======-->
    
    <section class="relative pt-20 about-area">
        <div class="container">
            <div class="row">
                <div class="w-full lg:w-1/2">
                    <div class="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div class="mb-4 section-title">
                            <div class="line"></div>
                            <h3 class="title"><span>Crafted for</span> SaaS, App and Software Landing Page</h3>
                        </div> <!-- section title -->
                        <p class="mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                        <a href="javascript:void(0)" class="main-btn gradient-btn">Try it Free</a>
                    </div> <!-- about content -->
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src="assets/images/about3.svg" alt="about">
                    </div> <!-- about image -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
        <div class="about-shape-1">
            <img src="assets/images/about-shape-1.svg" alt="shape">
        </div>
    </section>
    
    <!--====== ABOUT PART ENDS ======-->

    
    <!--====== ABOUT PART ENDS ======-->
    
    <!--====== VIDEO COUNTER PART START ======-->
    
    <section id="facts" class="pt-20 video-counter">
        <div class="container">
            <div class="row">
                <div class="w-full lg:w-1/2">
                    <div class="relative pb-8 mt-12 video-content wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img class="absolute bottom-0 left-0 -ml-8 dots" src="assets/images/dots.svg" alt="dots">
                        <div class="relative mr-6 rounded-lg shadow-md video-wrapper">
                            <div class="video-image">
                                <img src="assets/images/video.png" alt="video">
                            </div>
                            <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-blue-900 bg-opacity-25 rounded-lg video-icon">
                                <a href="https://www.youtube.com/watch?v=r44RKWyfcFw" class="video-popup"><i class="lni lni-play"></i></a>
                            </div>
                        </div> <!-- video wrapper -->
                    </div> <!-- video content -->
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div class="counter-content">
                            <div class="mb-8 section-title">
                                <div class="line"></div>
                                <h3 class="title">Cool facts <span> about this app</span></h3>
                            </div>
                            <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                        <div class="row no-gutters">
                            <div class="flex items-center justify-center single-counter counter-color-1">
                                <div class="text-center counter-items">
                                    <span class="text-2xl font-bold text-white"><span class="counter">125</span>K</span>
                                    <p class="text-white">Downloads</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-center single-counter counter-color-2">
                                <div class="text-center counter-items">
                                    <span class="text-2xl font-bold text-white"><span class="counter">87</span>K</span>
                                    <p class="text-white">Active Users</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-center single-counter counter-color-3">
                                <div class="text-center counter-items">
                                    <span class="text-2xl font-bold text-white"><span class="counter">4.8</span></span>
                                    <p class="text-white">User Rating</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="team" class="team-area pt-120">
        <div class="container">
            <div class="justify-center row">
                <div class="w-full lg:w-2/3">
                    <div class="pb-8 text-center section-title">
                        <div class="m-auto line"></div>
                        <h3 class="title"><span>Meet Our</span> Creative Team Members</h3>
                    </div>
                </div>
            </div>
            <div class="justify-center row">
                <div class="w-full sm:w-2/3 lg:w-1/3">
                    <div class="mt-8 text-center single-team wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div class="relative team-image">
                            <img class="w-full" src="assets/images/team-1.png" alt="Team"/>
                            <div class="team-social">
                                <ul>
                                    <li><a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-twitter-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-instagram-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="p-8">
                            <h5 class="mb-1 text-xl font-bold text-gray-900">Isabela Moreira</h5>
                            <p>Founder and CEO</p>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-2/3 lg:w-1/3">
                    <div class="mt-8 text-center single-team wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div class="relative team-image">
                            <img class="w-full" src="assets/images/team-2.png" alt="Team"/>
                            <div class="team-social">
                                <ul>
                                    <li><a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-twitter-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-instagram-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="p-8">
                            <h5 class="mb-1 text-xl font-bold text-gray-900">Elon Musk</h5>
                            <p>Sr. Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-2/3 lg:w-1/3">
                    <div class="mt-8 text-center single-team wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div class="relative team-image">
                            <img class="w-full" src="assets/images/team-3.png" alt="Team"/>
                            <div class="team-social">
                                <ul>
                                    <li><a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-twitter-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-instagram-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="p-8">
                            <h5 class="mb-1 text-xl font-bold text-gray-900">Fiona Smith</h5>
                            <p>Business Development Manager</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    </section>
    
   
    <section id="testimonial" class="testimonial-area pt-120">
        <div class="container">
            <div class="justify-center row">
                <div class="w-full lg:w-2/3">
                    <div class="pb-10 text-center section-title">
                        <div class="m-auto line"></div>
                        <h3 class="title">Users sharing<span> their experience</span></h3>
                    </div>
                </div>
            </div>
            <div class="row testimonial-active wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
                <div class="w-full lg:w-1/3">
                    <div class="single-testimonial">
                        <div class="flex items-center justify-between mb-6">
                            <div class="quota">
                                <i class="text-4xl duration-300 lni lni-quotation text-theme-color"></i>
                            </div>
                            <div class="star">
                                <ul class="flex">
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mb-8">
                            <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                        </div>
                        <div class="flex items-center testimonial-author">
                            <div class="relative author-image">
                                <img class="shape" src="assets/images/textimonial-shape.svg" alt="shape"/>
                                <img class="author" src="assets/images/author-1.png" alt="author"/>
                            </div>
                            <div class="author-content media-body">
                                <h6 class="mb-1 text-xl font-bold text-gray-900">Jenny Deo</h6>
                                <p>CEO, SpaceX</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4">
                    <div class="single-testimonial">
                        <div class="flex items-center justify-between mb-6">
                            <div class="quota">
                                <i class="text-4xl duration-300 lni lni-quotation text-theme-color"></i>
                            </div>
                            <div class="star">
                                <ul class="flex">
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mb-8">
                            <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                        </div>
                        <div class="flex items-center testimonial-author">
                            <div class="relative author-image">
                                <img class="shape" src="assets/images/textimonial-shape.svg" alt="shape"/>
                                <img class="author" src="assets/images/author-2.png" alt="author"/>
                            </div>
                            <div class="author-content media-body">
                                <h6 class="mb-1 text-xl font-bold text-gray-900">Marjin Otte</h6>
                                <p>UX Specialist, Yoast</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-testimonial">
                        <div class="flex items-center justify-between mb-6">
                            <div class="quota">
                                <i class="text-4xl duration-300 lni lni-quotation text-theme-color"></i>
                            </div>
                            <div class="star">
                                <ul class="flex">
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mb-8">
                            <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                        </div>
                        <div class="flex items-center testimonial-author">
                            <div class="relative author-image">
                                <img class="shape" src="assets/images/textimonial-shape.svg" alt="shape"/>
                                <img class="author" src="assets/images/author-3.png" alt="author"/>
                            </div>
                            <div class="author-content media-body">
                                <h6 class="mb-1 text-xl font-bold text-gray-900">David Smith</h6>
                                <p>CTO, Alphabet</p>
                            </div>
                        </div>
                    </div> <!-- single testimonial -->
                </div>
                <div class="col-lg-4">
                    <div class="single-testimonial">
                        <div class="flex items-center justify-between mb-6">
                            <div class="quota">
                                <i class="text-4xl duration-300 lni lni-quotation text-theme-color"></i>
                            </div>
                            <div class="star">
                                <ul class="flex">
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                    <li><i class="lni lni-star-filled text-theme-color-2"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mb-8">
                            <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                        </div>
                        <div class="flex items-center testimonial-author">
                            <div class="relative author-image">
                                <img class="shape" src="assets/images/textimonial-shape.svg" alt="shape"/>
                                <img class="author" src="assets/images/author-2.png" alt="author"/>
                            </div>
                            <div class="author-content media-body">
                                <h6 class="mb-1 text-xl font-bold text-gray-900">Fajar Siddiq</h6>
                                <p>COO, MakerFlix</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    <section id="blog" class="blog-area pt-120">
        <div class="container">
            <div class="row">
                <div class="w-full lg:w-1/2">
                    <div class="pb-8 section-title">
                        <div class="line"></div>
                        <h3 class="title"><span>Our Recent</span> Blog Posts</h3>
                    </div> 
                </div>
            </div> 
            <div class="justify-center row">
                <div class="w-full md:w-2/3 lg:w-1/3">
                    <div class="mx-4 mt-10 single-blog wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div class="mb-5 overflow-hidden blog-image rounded-xl">
                            <img class="w-full" src="assets/images/blog-1.jpg" alt="blog"/>
                        </div>
                        <div class="blog-content">
                            <ul class="flex mb-5 meta">
                                <li>Posted By: <a href="javascript:void(0)">Admin</a></li>
                                <li class="ml-12">03 June, 2023</li>
                            </ul>
                            <p class="mb-6 text-2xl leading-snug text-gray-900">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                            <a class="text-theme-color-2" href="javascript:void(0)">
                                Learn More
                                <i class="ml-2 lni lni-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div> 
                <div class="w-full md:w-2/3 lg:w-1/3">
                    <div class="mx-4 mt-10 single-blog wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div class="mb-5 overflow-hidden blog-image rounded-xl">
                            <img class="w-full" src="assets/images/blog-2.jpg" alt="blog"/>
                        </div>
                        <div class="blog-content">
                            <ul class="flex mb-5 meta">
                                <li>Posted By: <a href="javascript:void(0)">Admin</a></li>
                                <li class="ml-12">03 June, 2023</li>
                            </ul>
                            <p class="mb-6 text-2xl leading-snug text-gray-900">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                            <a class="text-theme-color-2" href="javascript:void(0)">
                                Learn More
                                <i class="ml-2 lni lni-chevron-right"></i>
                            </a>
                        </div>
                    </div> 
                </div> 
                <div class="w-full md:w-2/3 lg:w-1/3">
                    <div class="mx-4 mt-10 single-blog wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div class="mb-5 overflow-hidden blog-image rounded-xl">
                            <img class="w-full" src="assets/images/blog-3.jpg" alt="blog"/>
                        </div>
                        <div class="blog-content">
                            <ul class="flex mb-5 meta">
                                <li>Posted By: <a href="javascript:void(0)">Admin</a></li>
                                <li class="ml-12">03 June, 2023</li>
                            </ul>
                            <p class="mb-6 text-2xl leading-snug text-gray-900">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                            <a class="text-theme-color-2" href="javascript:void(0)">
                                Learn More 
                                <i class="ml-2 lni lni-chevron-right"></i>
                            </a>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div>
    </section>
    <footer id="footer" class="relative z-10 footer-area pt-120">
        <div class="footer-bg" style="background-image: url(assets/images/footer-bg.svg);"></div>
        <div class="container">
            <div class="px-6 pt-10 pb-20 mb-12 bg-white rounded-lg shadow-xl md:px-12 subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <div class="row">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:mt-12 subscribe-content">
                            <h2 class="text-2xl font-bold sm:text-4xl subscribe-title">
                                Subscribe Our Newsletter 
                                <span class="block font-normal">get reguler updates</span>
                            </h2>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="mt-12 subscribe-form">
                            <form action="#" class="relative focus:outline-none">
                                <input type="email" placeholder="Enter eamil" class="w-full py-4 pl-6 pr-40 duration-300 border-2 rounded focus:border-theme-color focus:outline-none">
                                <button class="main-btn gradient-btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-widget pb-120">
                <div class="row">
                    <div class="w-4/5 md:w-3/5 lg:w-2/6">
                        <div class="mt-12 footer-about wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <a class="inline-block mb-8 logo" href="index.html">
                                <img src="assets/images/logo.svg" alt="logo" class="w-40">
                            </a>
                            <p class="pb-10 pr-10 leading-snug text-white">Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                            <ul class="flex footer-social">
                                <li><a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="lni lni-twitter-filled"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="lni lni-instagram-filled"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/6">
                        <div class="row">
                            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                                <div class="mt-12 link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <div class="footer-title">
                                        <h4 class="mb-8 text-2xl font-bold text-white">Quick Link</h4>
                                    </div>
                                    <ul class="link">
                                        <li><a href="javascript:void(0)">Road Map</a></li>
                                        <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                        <li><a href="javascript:void(0)">Refund Policy</a></li>
                                        <li><a href="javascript:void(0)">Terms of Service</a></li>
                                        <li><a href="javascript:void(0)">Pricing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                                <div class="mt-12 link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <div class="footer-title">
                                        <h4 class="mb-8 text-2xl font-bold text-white">Resources</h4>
                                    </div>
                                    <ul class="link">
                                        <li><a href="javascript:void(0)">Home</a></li>
                                        <li><a href="javascript:void(0)">Page</a></li>
                                        <li><a href="javascript:void(0)">Portfolio</a></li>
                                        <li><a href="javascript:void(0)">Blog</a></li>
                                        <li><a href="javascript:void(0)">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-4/5 sm:w-1/3 md:w-2/5 lg:w-2/6">
                        <div class="mt-12 footer-contact wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                            <div class="footer-title">
                                <h4 class="mb-8 text-2xl font-bold text-white">Contact Us</h4>
                            </div>
                            <ul class="contact">
                                <li>+809272561823</li>
                                <li>info@gmail.com</li>
                                <li>www.yourweb.com</li>
                                <li>123 Stree New York City , United <br> States Of America 750.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-8 border-t border-gray-200 footer-copyright">
                <p class="text-white">
                    Template by <a class="duration-300 hover:text-theme-color-2" href="https://tailwindtemplates.co" rel="nofollow" target="_blank">TailwindTemplates</a> and
                    <a class="duration-300 hover:text-theme-color-2" href="https://uideck.com" rel="nofollow" target="_blank">UIdeck</a>
                </p>
            </div>
        </div>
        <div id="particles-2" class="particles"></div>
    </footer>
    <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
    <script src="assets/js/vendor/jquery-3.5.1-min.js"></script>
    <script src="assets/js/vendor/modernizr-3.7.1.min.js"></script>
    
    
    <script src="assets/js/plugins.js"></script>
    
    
    <script src="assets/js/slick.min.js"></script>
    
    
    <script src="assets/js/jquery.easing.min.js"></script>
    <script src="assets/js/scrolling-nav.js"></script>
    
   
    <script src="assets/js/wow.min.js"></script>
    
    
    <script src="assets/js/particles.min.js"></script>
    
   
    <script src="assets/js/main.js"></script>
    );
}
export default Navbar;
