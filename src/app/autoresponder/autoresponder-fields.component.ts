import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { AlertService } from "../_services";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AutoResponder } from "../_models";
import { Form } from "../_forms";

@Component({
  moduleId: module.id.toString(),
  selector: "app-autoresponder-fields",
  templateUrl: "./autoresponder-fields.component.html",
  styleUrls: ["./autoresponder-fields.css"],
})
export class AutoResponderFieldsComponent extends Form implements OnInit {
  @Input("autoresponder") autoresponder: AutoResponder;
  autoResponderForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    protected router: Router,
    protected location: Location,
    protected alertService: AlertService
  ) {
    super(alertService, router, location);
  }

  ngOnInit() {
    this.autoResponderForm = this.formBuilder.group({
      name: ["", Validators.required],
      type: [1],
      responses: this.formBuilder.array([]),
    });
  }

  get responses() {
    return this.autoResponderForm.get("responses") as FormArray;
  }

  createResponse(): FormGroup {
    return this.formBuilder.group({
      id: [""],
      days: [0],
      hours: [0],
      minutes: [0],
      message: ["", Validators.required],
      useDifferentResponse: [false],
      afterHoursMessage: [""],
    });
  }

  addResponse(): void {
    this.responses.push(this.createResponse());
  }

  deleteResponse(index: number): void {
    this.responses.removeAt(index);
  }
}
