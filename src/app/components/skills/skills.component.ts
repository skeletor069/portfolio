import { Component, OnInit } from '@angular/core';

export interface ISkill{
  title:string,
  skillItems:ISkillItem[]
}

export interface ISkillItem{
  name:string
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  allSkills:ISkill[] = [
    {
      title: 'Frontend',
      skillItems: [
        {name: 'HTML'}, {name: 'CSS'}, {name: 'Javascript'}, {name: 'Angular JS'}, {name: 'Angular'}, {name: 'Vue'}
      ]
    },
    {
      title: 'Backend',
      skillItems:[
        {name: 'C#'}, {name: '.NET Framework'}, {name: '.NET Core'}, {name: 'Entity Framework'}
      ]
    },
    {
      title: 'Databases',
      skillItems:[
        {name: 'MSSQL Server'}, {name: 'MySQL'}, {name: 'Firebase RDB'}
      ]
    },
    {
      title: 'Cloud',
      skillItems:[
        {name: 'Azure'}, {name: 'Oracle Cloud'}
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
