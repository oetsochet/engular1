import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailtechno',
  templateUrl: './detailtechno.component.html',
  styleUrls: ['./detailtechno.component.css']
})
export class DetailtechnoComponent implements OnInit {

  index:any=0;
  datatechno:any={
    titletechno:'',
    urltechno:''
  };
  detailtechno=[
    {"titletechno":"ម្ចាស់ iPhone ចង់ដឹងក្នុងកម្មវិធីមួយមានលក់របស់អ្វីខ្លះ កុំភ្លេចវិធីមួយនេះ​",
      "detialtechno":"កម្មវិធីជាច្រើននៅលើ App Store ត្រូវបានដាក់ឱ្យទាញយកដោយឥតគិតថ្លៃ ប៉ុន្ដែនៅក្នុងកម្មវិធីទាំងនោះច្បាស់ណាស់ នឹងមានលក់សេវាកម្ម មុខងារផ្សេងៗ ឬ items ជាច្រើនទៀត បន្ទាប់ពីអ្នកបានចូលទៅប្រើប្រាស់។ដូចនេះដើម្បីដឹងកាន់តែច្បាស់ ថាក្នុងកម្មវិធី ឬហ្គេមទាំងនោះមានលក់អ្វីបន្ថែម មុនសម្រេចចិត្តទាញយក លោកអ្នកអាចសាកល្បងតាម",
      urltechno:"https://cdn.sabay.com/cdn/media.sabay.com/media/TECH-KK/KOSAL/5fdc6e5a44de3_1608281640_medium.jpg"
    },
    {"titletechno":"អបអរសាទរ! ​E-School Cambodia រៀន​គ្រប់​កន្លែង​លើ​​ទូរសព្ទ​ដៃ​​ មាន​អ្នក​ប្រើ​ដល់១​លាន​នាក់​​",
      "detialtechno":"​កម្មវិធី​ ​e-School Cambodia​ ​នៅ​លើ​ទូរសព្ទ​ដៃ​ ​មក​ទល់​ពេល​នេះ​មាន​អ្នក​ចុះ​ឈ្មោះ​ប្រើប្រាស់​ឡើង​ដល់ ​ចំនួន ១​ លាន​នាក់​រួច​មក​ហើយ។ ​ក្នុង​នោះ​មុខ​វិជ្ជា​ជា​ច្រើន​ត្រូវ​បាន​រៀប​ចំ​ជាង ២០០ ថ្នាក់​ដែល​មាន​ចំនួន​ច្រើន​ជាង ២មុឺន​វីដេអូនៅ​លើ​កម្មវិធី​ដ៏​ពេញ​និយម​មួយ​នេះ​។",
      urltechno:"https://cdn.sabay.com/cdn/media.sabay.com/media/TECH-KK/RAKSA/Local(1)/App-COVID-19/5fd2ea542ff7d_1607658060_medium.jpg"
    },
    {"titletechno":"អស្ចារ្យមែន! realme ប្រកាសចេញផ្លូវការនូវតុក្កតាតំណាង “realmeow”​",
      "detialtechno":"realme ដែលជាម៉ាកស្មាតហ្វូនមានការរីកលូតលាស់លឿនបំផុតនៅលើពិភពលោក ថ្ងៃនេះបានដាក់ប្រកាសជាផ្លូវការនូវតុក្កតាតំណាង realmeow ក្នុងនាមជា Chief Trendsetting Officer។ “realmeow” ត្រូវបានបំផុសគំនិតដោយសត្វឆ្មា ការរចនាទាន់សម័យ តំណាងឲ្យ realme មានភាពវ័យក្មេង ហ៊ានឆ្ពោះទៅមុខ ៖ ឯករាជ្យ វាយបំបែកនូវអ្វីថ្មី ក្លាហាន និងភាពជឿជាក់។",
      urltechno:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Technology-News/International/News412/5fdc613beb469_1608278280_medium.jpg"
    },
    {"titletechno":"Hacker ទាំង៨ប្រភេទ ធ្វើឱ្យពិភពលោកមានរឿងឈឺក្បាលមិនឈប់​",
      "detialtechno":"សព្វថ្ងៃការវាយប្រហារតាមអ៊ីនធឺណិតដោយ Hacker មានច្រើនសន្ធឹកសន្ធាប់ និងកំពុងកើតឡើងគ្រប់ពេល ធ្វើ​ឱ្យ​បុគ្គល និងស្ថាប័នជាច្រើនត្រូវឈឺក្បាលមិនឈប់នោះទេអំពីរឿងនេះ។ សកម្មភាពទាំងនេះហើយ បានធ្វើឱ្យក្លាយជាមុខរបរមួយ អាចឱ្យ Hacker ទាំងនោះរកចំណូលបាន និងមានក្រុមមនុស្សជំនាញៗជាច្រើនចូលរួមជាមួយពួកគេ ដើម្បីរកស៊ីក្នុងទីផ្សារងងឹត។ អ៊ីចឹងយើងនឹងចែករំលែកឱ្យអ្នកទាំងអស់គ្នាដឹងពីប្រភេទក្រុម Hacker ដោយត្រូវបានបែងចែកដូចជា៖",
      urltechno:"https://cdn.sabay.com/cdn/media.sabay.com/media/TECH-KK/KOSAL/5fdc2fd769dbb_1608265680_medium.jpg"
    },
    {"titletechno":"​ពីតម្លៃត្រកូល Galaxy S21 មានទាំងដំណឹងល្អ និងមិនល្អ​",
      "detialtechno":"វិបសាយ​ GalaxyClub ដែល​អះអាង​ថា​ទទួល​បាន​ដំណឹង​ពី​ប្រភព​ច្បាស់​ការណ៍​មួយ​អំពី​តម្លៃ Galaxy S21 Series បាន​ឲ្យ​ដឹង​ថា​​ Galaxy S21 និង S21+ នឹង​មាន​តម្លៃ​ធូរ​ថ្លៃ​ជាង​មុន ខណៈ​ដែល S21 Ultra នឹង​ឡើង​ថ្លៃ​បន្តិច។​ប្រភព​ខាង​លើ​បាន​ឲ្យ​ដឹង​ថា​ Samsung នឹង​បញ្ចេញ​លក់​ Galaxy S21 5G ជា​មួយ​ទំហំ 128GB ក្នុង​តម្លៃ ៨៧៩​អឺរ៉ូ (ប្រមាណ ១០៧៦​ដុល្លារ) នៅ​​ទីផ្សារ​អឺរ៉ុប។ ​ពី​មុន​ Galaxy S20 5G គឺ​មាន​ដាក់​លក់​តម្លៃ ៩៩៩​អឺរ៉ូ នៅ​លើ​ទីផ្សារ​ភាគ​ច្រើន​នៅ​អឺរ៉ុប។   ចំណែក​ Galaxy S21+ 5G វិញ​នឹង​មាន​ដាក់​លក់​ក្នុង​តម្លៃ ១០៧៩​អឺរ៉ូ (ប្រមាណ​ ១៣២១​ដុល្លារ) ធៀប​នឹង​ Galaxy S20+ 5G ​ពេល​ចេញ​ដំបូង​គឺ​មាន​តម្លៃ ១០៩៩​អឺរ៉ូ។",
      urltechno:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Technology-News/International/News412/5fdc19c167288_1608259980_medium.jpg"
    },
    {"titletechno":"កម្មវិធី​ល្អ​នេះ​អាច​ដឹង​ថា នរណា​ហ៊ាន Hack ចូល​ស្មាតហ្វូន​",
      "detialtechno":"អ្នក​និពន្ធ​ Tho Meet បាន​សម្រុក​ធ្វើ​បទ​ចម្រៀង​ចេញ​ដូច​ព្យុះ ក្រោយ​បាន​ចូល​រួម​ជាមួយ​ហង្សមាស​ប្រមាណ​២​ខែ​មក​នេះ ខណៈ​សប្ដាហ៍​មុន លោក​ទើប​នឹង​បាន​ធ្វើ​ឲ្យ​មាន​ការ​ចាប់​អារម្មណ៍​ខ្លាំង​រួច​មក​ហើយ​ ក្រោយ​ធ្វើ​បទ ប្ដី​លើ​ផែន​ដី អស់​ល្អ​ត្រឹម​ប្ដី​អូន​ហើយ!” ឲ្យ សុគន្ធ និសា ទទួល​បាន​ការ​គាំទ្រ​យ៉ាង​សម្បើម។",
      urltechno:"https://cdn.sabay.com/cdn/media.sabay.com/media/TECH-KK/RAKSA/Local(1)/App-COVID-19/5fd1ec3313579_1607592960_medium.jpg"
    },
    {"titletechno":"ម្ចាស់ iPhone ចង់ដឹងក្នុងកម្មវិធីមួយមានលក់របស់អ្វីខ្លះ កុំភ្លេចវិធីមួយនេះ​",
      "detialtechno":"កម្មវិធីជាច្រើននៅលើ App Store ត្រូវបានដាក់ឱ្យទាញយកដោយឥតគិតថ្លៃ ប៉ុន្ដែនៅក្នុងកម្មវិធីទាំងនោះច្បាស់ណាស់ នឹងមានលក់សេវាកម្ម មុខងារផ្សេងៗ ឬ items ជាច្រើនទៀត បន្ទាប់ពីអ្នកបានចូលទៅប្រើប្រាស់។ដូចនេះដើម្បីដឹងកាន់តែច្បាស់ ថាក្នុងកម្មវិធី ឬហ្គេមទាំងនោះមានលក់អ្វីបន្ថែម មុនសម្រេចចិត្តទាញយក លោកអ្នកអាចសាកល្បងតាម",
      urltechno:"https://cdn.sabay.com/cdn/media.sabay.com/media/TECH-KK/KOSAL/5fdc6e5a44de3_1608281640_medium.jpg"
    },
    {"titletechno":"អបអរសាទរ! ​E-School Cambodia រៀន​គ្រប់​កន្លែង​លើ​​ទូរសព្ទ​ដៃ​​ មាន​អ្នក​ប្រើ​ដល់១​លាន​នាក់​​",
      "detialtechno":"​កម្មវិធី​ ​e-School Cambodia​ ​នៅ​លើ​ទូរសព្ទ​ដៃ​ ​មក​ទល់​ពេល​នេះ​មាន​អ្នក​ចុះ​ឈ្មោះ​ប្រើប្រាស់​ឡើង​ដល់ ​ចំនួន ១​ លាន​នាក់​រួច​មក​ហើយ។ ​ក្នុង​នោះ​មុខ​វិជ្ជា​ជា​ច្រើន​ត្រូវ​បាន​រៀប​ចំ​ជាង ២០០ ថ្នាក់​ដែល​មាន​ចំនួន​ច្រើន​ជាង ២មុឺន​វីដេអូនៅ​លើ​កម្មវិធី​ដ៏​ពេញ​និយម​មួយ​នេះ​។",
      urltechno:"https://cdn.sabay.com/cdn/media.sabay.com/media/TECH-KK/RAKSA/Local(1)/App-COVID-19/5fd2ea542ff7d_1607658060_medium.jpg"
    },
    {"titletechno":"អស្ចារ្យមែន! realme ប្រកាសចេញផ្លូវការនូវតុក្កតាតំណាង “realmeow”​",
      "detialtechno":"realme ដែលជាម៉ាកស្មាតហ្វូនមានការរីកលូតលាស់លឿនបំផុតនៅលើពិភពលោក ថ្ងៃនេះបានដាក់ប្រកាសជាផ្លូវការនូវតុក្កតាតំណាង realmeow ក្នុងនាមជា Chief Trendsetting Officer។ “realmeow” ត្រូវបានបំផុសគំនិតដោយសត្វឆ្មា ការរចនាទាន់សម័យ តំណាងឲ្យ realme មានភាពវ័យក្មេង ហ៊ានឆ្ពោះទៅមុខ ៖ ឯករាជ្យ វាយបំបែកនូវអ្វីថ្មី ក្លាហាន និងភាពជឿជាក់។",
      url:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Technology-News/International/News412/5fdc613beb469_1608278280_medium.jpg"
    },
    {"titletechno":"Hacker ទាំង៨ប្រភេទ ធ្វើឱ្យពិភពលោកមានរឿងឈឺក្បាលមិនឈប់​",
      "detialtechno":"សព្វថ្ងៃការវាយប្រហារតាមអ៊ីនធឺណិតដោយ Hacker មានច្រើនសន្ធឹកសន្ធាប់ និងកំពុងកើតឡើងគ្រប់ពេល ធ្វើ​ឱ្យ​បុគ្គល និងស្ថាប័នជាច្រើនត្រូវឈឺក្បាលមិនឈប់នោះទេអំពីរឿងនេះ។ សកម្មភាពទាំងនេះហើយ បានធ្វើឱ្យក្លាយជាមុខរបរមួយ អាចឱ្យ Hacker ទាំងនោះរកចំណូលបាន និងមានក្រុមមនុស្សជំនាញៗជាច្រើនចូលរួមជាមួយពួកគេ ដើម្បីរកស៊ីក្នុងទីផ្សារងងឹត។ អ៊ីចឹងយើងនឹងចែករំលែកឱ្យអ្នកទាំងអស់គ្នាដឹងពីប្រភេទក្រុម Hacker ដោយត្រូវបានបែងចែកដូចជា៖",
      urltechno:"https://cdn.sabay.com/cdn/media.sabay.com/media/TECH-KK/KOSAL/5fdc2fd769dbb_1608265680_medium.jpg"
    },
    {"titletechno":"​ពីតម្លៃត្រកូល Galaxy S21 មានទាំងដំណឹងល្អ និងមិនល្អ​",
      "detialtechno":"វិបសាយ​ GalaxyClub ដែល​អះអាង​ថា​ទទួល​បាន​ដំណឹង​ពី​ប្រភព​ច្បាស់​ការណ៍​មួយ​អំពី​តម្លៃ Galaxy S21 Series បាន​ឲ្យ​ដឹង​ថា​​ Galaxy S21 និង S21+ នឹង​មាន​តម្លៃ​ធូរ​ថ្លៃ​ជាង​មុន ខណៈ​ដែល S21 Ultra នឹង​ឡើង​ថ្លៃ​បន្តិច។​ប្រភព​ខាង​លើ​បាន​ឲ្យ​ដឹង​ថា​ Samsung នឹង​បញ្ចេញ​លក់​ Galaxy S21 5G ជា​មួយ​ទំហំ 128GB ក្នុង​តម្លៃ ៨៧៩​អឺរ៉ូ (ប្រមាណ ១០៧៦​ដុល្លារ) នៅ​​ទីផ្សារ​អឺរ៉ុប។ ​ពី​មុន​ Galaxy S20 5G គឺ​មាន​ដាក់​លក់​តម្លៃ ៩៩៩​អឺរ៉ូ នៅ​លើ​ទីផ្សារ​ភាគ​ច្រើន​នៅ​អឺរ៉ុប។   ចំណែក​ Galaxy S21+ 5G វិញ​នឹង​មាន​ដាក់​លក់​ក្នុង​តម្លៃ ១០៧៩​អឺរ៉ូ (ប្រមាណ​ ១៣២១​ដុល្លារ) ធៀប​នឹង​ Galaxy S20+ 5G ​ពេល​ចេញ​ដំបូង​គឺ​មាន​តម្លៃ ១០៩៩​អឺរ៉ូ។",
      urltechno:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Technology-News/International/News412/5fdc19c167288_1608259980_medium.jpg"
    },
  ];
  constructor(private router:Router,private  activateRoute:ActivatedRoute) { }

  ngOnInit() {
    let index:any;
    this.activateRoute.params.subscribe(params =>{
      console.log(params['idtechno']);
      index=params['idtechno'];
      this.datatechno=this.detailtechno[index];
      console.log(this.datatechno);

    });
  }

}
