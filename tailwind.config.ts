//import container from "postcss/lib/container";
import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
     container:{
      center :true,
      padding:'1.5rem'
     
     },
      ///transitionDuration:300,
    },
  },
  plugins: [],
  
};
export default config;
