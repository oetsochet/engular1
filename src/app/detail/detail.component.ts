import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  indextechno:any=0;
  data:any={
    title:'',
    url:''
  };
  details=[
    {"title":"តារាប្រុសទាំងនេះ ធ្វើឲ្យគេលង់ច្រើនណាស់ ពេលពាក់ម៉ាសជិតម្ដងៗ",
    "detial": "ក្នុង​គ្រា​ដែល​ពិភពលោកទាំង​មូល​កំពុង​ជួប​ប្រទះ​នឹង​ជំងឺ​ឆ្លង​ដ៏សាហាវ COVID-19 ដូចនេះ​មនុស្ស​គ្រប់គ្នា​ត្រូវ​តែ​រក្សា​គម្លាត​ឆ្ងាយ​ពី​គ្នាតាម​ដែល​អាច​ធ្វើ​បាន​ ឬ​ត្រូវ​ការពារ​ខ្លួន​ដោយរក្សា​អនាម័យ​ ក៏ដូចជាពាក់​ម៉ាស​ឲ្យជាប់​ជា​ដើម។  អាច​និយាយ​បាន​ថា​ ការពាក់ម៉ាសក៏​ជា​ស្ទីល​មួយបែប ប៉ុន្តែ​ពេល​ខ្លះ​ក៏​អាច​លាក់បាំង​នូវ​មន្តស្នេហ៍ ដោយសារវា​បាំង​ពាក់កណ្ដាលមុខ។ ដោយឡែក​សម្រាប់​តារា​កូរ៉េ​ទាំង​នេះ​វិញ​ គ្មាន​អ្វី​អាចរារាំងភាពស្រស់ស្អាតរបស់ពួកគេ​ឡើយ ជាឧទាហរណ៍ដូចពេល​ពាក់​ម៉ាស​នេះ​ជា​ដើម ព្រោះ​វាកាន់​តែ​ធ្វើ​ឲ្យ​ពួកគេសង្ហា​ថែម​មួយ​កម្រិត។ តារា​ប្រុស​ដែល​មហាជនភាគ​ច្រើន​កោតសរសើរ និង​លង់ដោយសារ​មន្ត​ស្នេហ៍ពេល​ពាក់ម៉ាស​នោះ​រួមមាន៖",
     url:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Ent-Int/Korea/Korean-164/5fd863fcd03aa_1608016860_medium.jpg"
    },
    {"title":"ទើប​ចូល​ហង្សមាស​បាន​ជាង ២ ខែ Tho Meet សម្រុក​ធ្វើ​បទ​ចេញ​ដូច​ព្យុះ",
      "detial":"អ្នក​និពន្ធ​ Tho Meet បាន​សម្រុក​ធ្វើ​បទ​ចម្រៀង​ចេញ​ដូច​ព្យុះ ក្រោយ​បាន​ចូល​រួម​ជាមួយ​ហង្សមាស​ប្រមាណ​២​ខែ​មក​នេះ ខណៈ​សប្ដាហ៍​មុន លោក​ទើប​នឹង​បាន​ធ្វើ​ឲ្យ​មាន​ការ​ចាប់​អារម្មណ៍​ខ្លាំង​រួច​មក​ហើយ​ ក្រោយ​ធ្វើ​បទ ប្ដី​លើ​ផែន​ដី អស់​ល្អ​ត្រឹម​ប្ដី​អូន​ហើយ!” ឲ្យ សុគន្ធ និសា ទទួល​បាន​ការ​គាំទ្រ​យ៉ាង​សម្បើម។",
      url:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Ent-Int/Korea/Korean-164/5fd31ac370cc5_1607670420_medium.jpg"
    },
    {"title":"ទើប​ចូល​ហង្សមាស​បាន​ជាង ២ ខែ Tho Meet សម្រុក​ធ្វើ​បទ​ចេញ​ដូច​ព្យុះ",
      "detial":"អ្នក​និពន្ធ​ Tho Meet បាន​សម្រុក​ធ្វើ​បទ​ចម្រៀង​ចេញ​ដូច​ព្យុះ ក្រោយ​បាន​ចូល​រួម​ជាមួយ​ហង្សមាស​ប្រមាណ​២​ខែ​មក​នេះ ខណៈ​សប្ដាហ៍​មុន លោក​ទើប​នឹង​បាន​ធ្វើ​ឲ្យ​មាន​ការ​ចាប់​អារម្មណ៍​ខ្លាំង​រួច​មក​ហើយ​ ក្រោយ​ធ្វើ​បទ ប្ដី​លើ​ផែន​ដី អស់​ល្អ​ត្រឹម​ប្ដី​អូន​ហើយ!” ឲ្យ សុគន្ធ និសា ទទួល​បាន​ការ​គាំទ្រ​យ៉ាង​សម្បើម។",
      url:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Local-Entertainment/Another-137/5fd31d285b580_1607671080_medium.jpg"
    },
    {"title":"ទើប​ចូល​ហង្សមាស​បាន​ជាង ២ ខែ Tho Meet សម្រុក​ធ្វើ​បទ​ចេញ​ដូច​ព្យុះ",
      "detial":"អ្នក​និពន្ធ​ Tho Meet បាន​សម្រុក​ធ្វើ​បទ​ចម្រៀង​ចេញ​ដូច​ព្យុះ ក្រោយ​បាន​ចូល​រួម​ជាមួយ​ហង្សមាស​ប្រមាណ​២​ខែ​មក​នេះ ខណៈ​សប្ដាហ៍​មុន លោក​ទើប​នឹង​បាន​ធ្វើ​ឲ្យ​មាន​ការ​ចាប់​អារម្មណ៍​ខ្លាំង​រួច​មក​ហើយ​ ក្រោយ​ធ្វើ​បទ ប្ដី​លើ​ផែន​ដី អស់​ល្អ​ត្រឹម​ប្ដី​អូន​ហើយ!” ឲ្យ សុគន្ធ និសា ទទួល​បាន​ការ​គាំទ្រ​យ៉ាង​សម្បើម។",
      url:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Local-Entertainment/Another-137/5fd31d285b580_1607671080_medium.jpg"
    },
    {"title":"ទើប​ចូល​ហង្សមាស​បាន​ជាង ២ ខែ Tho Meet សម្រុក​ធ្វើ​បទ​ចេញ​ដូច​ព្យុះ",
      "detial":"អ្នក​និពន្ធ​ Tho Meet បាន​សម្រុក​ធ្វើ​បទ​ចម្រៀង​ចេញ​ដូច​ព្យុះ ក្រោយ​បាន​ចូល​រួម​ជាមួយ​ហង្សមាស​ប្រមាណ​២​ខែ​មក​នេះ ខណៈ​សប្ដាហ៍​មុន លោក​ទើប​នឹង​បាន​ធ្វើ​ឲ្យ​មាន​ការ​ចាប់​អារម្មណ៍​ខ្លាំង​រួច​មក​ហើយ​ ក្រោយ​ធ្វើ​បទ ប្ដី​លើ​ផែន​ដី អស់​ល្អ​ត្រឹម​ប្ដី​អូន​ហើយ!” ឲ្យ សុគន្ធ និសា ទទួល​បាន​ការ​គាំទ្រ​យ៉ាង​សម្បើម។",
      url:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Local-Entertainment/Another-137/5fd31d285b580_1607671080_medium.jpg"
    },
    {"title":"ទើប​ចូល​ហង្សមាស​បាន​ជាង ២ ខែ Tho Meet សម្រុក​ធ្វើ​បទ​ចេញ​ដូច​ព្យុះ",
      "detial":"អ្នក​និពន្ធ​ Tho Meet បាន​សម្រុក​ធ្វើ​បទ​ចម្រៀង​ចេញ​ដូច​ព្យុះ ក្រោយ​បាន​ចូល​រួម​ជាមួយ​ហង្សមាស​ប្រមាណ​២​ខែ​មក​នេះ ខណៈ​សប្ដាហ៍​មុន លោក​ទើប​នឹង​បាន​ធ្វើ​ឲ្យ​មាន​ការ​ចាប់​អារម្មណ៍​ខ្លាំង​រួច​មក​ហើយ​ ក្រោយ​ធ្វើ​បទ ប្ដី​លើ​ផែន​ដី អស់​ល្អ​ត្រឹម​ប្ដី​អូន​ហើយ!” ឲ្យ សុគន្ធ និសា ទទួល​បាន​ការ​គាំទ្រ​យ៉ាង​សម្បើម។",
      url:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Local-Entertainment/Another-137/5fd31d285b580_1607671080_medium.jpg"
    },
    {"title":"ទើប​ចូល​ហង្សមាស​បាន​ជាង ២ ខែ Tho Meet សម្រុក​ធ្វើ​បទ​ចេញ​ដូច​ព្យុះ",
      "detial":"អ្នក​និពន្ធ​ Tho Meet បាន​សម្រុក​ធ្វើ​បទ​ចម្រៀង​ចេញ​ដូច​ព្យុះ ក្រោយ​បាន​ចូល​រួម​ជាមួយ​ហង្សមាស​ប្រមាណ​២​ខែ​មក​នេះ ខណៈ​សប្ដាហ៍​មុន លោក​ទើប​នឹង​បាន​ធ្វើ​ឲ្យ​មាន​ការ​ចាប់​អារម្មណ៍​ខ្លាំង​រួច​មក​ហើយ​ ក្រោយ​ធ្វើ​បទ ប្ដី​លើ​ផែន​ដី អស់​ល្អ​ត្រឹម​ប្ដី​អូន​ហើយ!” ឲ្យ សុគន្ធ និសា ទទួល​បាន​ការ​គាំទ្រ​យ៉ាង​សម្បើម។",
      url:"https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Local-Entertainment/Another-137/5fd31d285b580_1607671080_medium.jpg"
    },
  ];

  constructor(private router:Router,private  activateRoute:ActivatedRoute) { }

  ngOnInit() {
    let index:any;
    this.activateRoute.params.subscribe(params =>{
      console.log(params['id']);
      index=params['id'];
      this.data=this.details[index];
      console.log(this.data);

    });
  }

}
