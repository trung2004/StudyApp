import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Lesson } from '../_models/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  @Input() lesson: Lesson;
  constructor() { }

  ngOnInit(): void {
  }

}
