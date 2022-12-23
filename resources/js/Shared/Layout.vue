<template>
    <div v-if="showDisaccount" class="grid grid-cols-4 content-center dark:bg-slate-800 text-black sm:h-16 lg:h-8">
        <div class="col-start-2 col-span-2 justify-self-center">
            <p class="dark:text-white">
                Our Black Friday sale is now live! Get 45% off any individual subscription.
                <font-awesome-icon icon="fa-solid fa-trophy" class="text-yellow-400"/>
            </p>
        </div>
        <div class="col-start-4 justify-self-end mr-5 dark:text-white" @click="delDisaccount()">
            <font-awesome-icon icon="fa-solid fa-xmark"
                                class="text-danger"/>
        </div>
    </div>

    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-slate-800 border-b-2 border-b border-slate-400">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
                <h1 class="font-black text-2xl dark:text-white">MyCourse</h1>
            </a>
            <div class="flex md:order-2 items-center">
                <div class="relative">
<!--                    <font-awesome-icon-->
<!--                        @click="changeTheme()"-->
<!--                        icon="fa-solid fa-circle-half-stroke" class="mr-8 fa-xl dark:text-red-700"-->
<!--                     />-->
                        <font-awesome-icon
                            @click="changeTheme()"
                            icon="fa-regular fa-moon" class="mr-8 fa-xl dark:text-yellow-400"
                        />
                       <div v-if="changeThemeMode" id="modeContainer" class="text-justify cursor-pointer select-none absolute top-10 -left-[50px] w-32  drop-shadow-xl bg-white rounded-lg divide-y">
                        <div class="p-1 hover:bg-slate-200"
                             v-for="item in themesItems" :key="item.id"
                             @click="selectTheme(item.id)"
                         >
                            <font-awesome-icon class="mr-1 ml-1"
                                :icon="item.themeItem === 'Dark' ? 'fa-regular fa-moon' : item.themeItem === 'Light' ? 'fa-regular fa-sun' : 'fa-solid fa-desktop'"
                            />
                            <p class="inline">{{item.themeItem}}</p>
                        </div>
                     </div>
                </div>

                <div>
                   <button type="button" class="mr-8 hover:underline dark:text-white">Sign In</button>
                   <button type="button" class="dark:text-white rounded-full border hover:text-teal-500 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Get Started For Free</button>

                   <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                       <span class="sr-only">Open main menu</span>
                       <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                   </button>
               </div>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">
                            Courses
                        </a>
                    </li>
                    <li>
                        <Link href="/article"
                              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                              :class="{'text-blue-700': $page.url.startsWith('/article') }"
                             >
                            Articles
                        </Link>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Instructors
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Plan
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="p-6 dark:bg-slate-800">
        <div class="container mx-auto">
            <slot/>
        </div>
    </section>
</template>

<script setup>

    import { reactive, ref ,computed } from 'vue';
    const showDisaccount = ref(true);
    const changeThemeMode = ref(false);

    const themesItems = reactive([
        {id:'1',themeItem:"Dark"},
        {id:'2',themeItem:"Light"},
        {id:'3',themeItem:"System"}
    ])

    const delDisaccount = ( _ =>
        showDisaccount.value = false
    )

    let childNumber = 0;
    const selectEachModeWithDownArrow = ( () => {
            if(childNumber < 0 || childNumber > 2)
                return;
            let modeContainerChild = document.getElementById("modeContainer").children;
            let modeContainerChildClassList = modeContainerChild.item(`${childNumber}`).classList;
            modeContainerChildClassList.add('bg-slate-200');
            if(childNumber !== 0 && modeContainerChild.item(`${childNumber - 1}`).classList.contains('bg-slate-200'))
                modeContainerChild.item(`${childNumber - 1}`).classList.remove('bg-slate-200');
            childNumber++
        }
    )

    const changeTheme = ( _ => {
        const checkTheme = changeThemeMode.value;
        if(checkTheme)
            changeThemeMode.value = false
        else{
            window.addEventListener("keydown",(event) => {
                if(event.keyCode === 27)
                    return changeThemeMode.value = false
                if(event.keyCode === 40)
                    selectEachModeWithDownArrow()
                //if(event.keyCode === 38)
                   // selectEachModeWithArrowKey("Up")
            })
            changeThemeMode.value = true
        }
    })

    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

    const selectedTheme = ref(userTheme);

    const themeSwitch = (theme) => {
        if(theme==='dark')
        {
            if(document.documentElement.classList.contains('dark'))
                document.documentElement.classList.remove('dark');
            localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark");
            changeThemeMode.value = false
        }

        if(theme === 'light')
        {
            localStorage.setItem("theme",'light')
            document.documentElement.classList.remove('dark');
            changeThemeMode.value = false
        }
    }

    const selectTheme = ((themeId)=> {

        if(themeId === '1')
        {
            themeSwitch('dark')
        }

        if(themeId === "2")
        {
            themeSwitch('light')
        }
        if(themeId === "3"){
            if(!systemTheme){
                themeSwitch('light')
            }
            else{
                themeSwitch('dark')
            }
        }

    })
    const themeCheck = () => {
        if(selectedTheme.value === "dark" || (!userTheme && systemTheme))
            document.documentElement.classList.add('dark')
    }
    themeCheck();

</script>

<style scoped>

</style>

<!-- What will Be next
    when  arrowUp key event fires bg-slate-color and text color will change
    make responsive and refractor
    learn typescript and vite
    build admindashboard
-->
