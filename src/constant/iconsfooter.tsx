import { Facebook, Github, LinkIcon, Linkedin, Mail, Twitter, X, Youtube, YoutubeIcon } from "lucide-react"
import { Icon } from "next/dist/lib/metadata/types/metadata-types"
import { footerColumn } from "./imageInterface";
import { features, title } from "process";


interface icons{
    // icons:
}
const icon=[
    <X  className="icon-footer"></X>,
    <Linkedin className="icon-footer"></Linkedin>,
    <Youtube  className="icon-footer" />,
    <Facebook className="icon-footer"></Facebook>,
    <Mail  className="icon-footer"/>,
    <Github className="icon-footer"></Github>
];
// arrray of support company
export const showfooterCol:footerColumn[]=[
    {title:"Support",
    features:[
  'pricing',
 'documentation',
 'guides',
 'API status'
    ],
},{
    title:'Sloution',
    features:[
'markting',
'analytics',
'commerce',
'insight'
    ]
},
{
    title:'copmany',
    features:[
        'about',
        'blog',
        'jobs',
        'press',
        'partners'
    ]
},
{title:'legal',
features:[
    'about',
    'blog',
    'jobs',
    'press',
    'partners'
]
}
]

const legal:footerColumn[]=[

]
function Icons(){
    return(
        <div className="flex   p-4 ">
            <ul className="flex gap-6 ">
                {icon.map((icon,index)=>(
                    <li key={index} className="" >{icon}</li>
                ))}
            </ul>

        </div>
    )
}
// export default Icons,

export default  Icons