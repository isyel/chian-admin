import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CommonMethods } from "src/app/app.common";
import { OptionsModel } from "src/app/models/OptionsModel";
import { OptionsService } from "src/app/services/options/options.service";

@Component({
  selector: "app-cylinder",
  templateUrl: "./cylinder.component.html",
  styleUrls: ["./cylinder.component.scss"],
})
export class CylinderComponent implements OnInit {
  cylinder: OptionsModel;
  cylinderForm: FormGroup;
  loading: boolean;
  cylinderId: string;
  private subscription: Subscription;
  response: any;

  constructor(
    private optionsService: OptionsService,
    private formBuilder: FormBuilder,
    public commonMethods: CommonMethods,
    private route: ActivatedRoute
  ) {
    this.cylinderForm = this.formBuilder.group({
      size: ["", Validators.required],
      price: ["", Validators.required],
      name: ["", Validators.required],
      description: [""],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cylinderId = params["id"];
      // In a real app: dispatch action to load the details here.
      this.getCylinderDetails();
    });
  }

  getCylinderDetails() {
    this.loading = true;
    this.subscription = this.optionsService.getOne(this.cylinderId).subscribe(
      (result) => {
        this.cylinder = result.data;
        this.populateCylinderData();
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  populateCylinderData() {
    console.log("this.cylinder: ", this.cylinder);

    this.cylinderForm.setValue({
      size: this.cylinder.size,
      price: this.cylinder.price,
      name: this.cylinder.name,
      description: this.cylinder.discription || "",
    });
  }

  updateCylinder() {
    this.response = null;
    const createCylinderData: OptionsModel = {
      name: this.cylinderForm.value.name,
      size: this.cylinderForm.value.size,
      price: this.cylinderForm.value.price,
      discription: this.cylinderForm.value.discription,
    };
    this.optionsService.edit(this.cylinderId, createCylinderData).subscribe(
      async (result) => {
        if (result.status) {
          console.log(result);
          this.response = "Item Updated Successfully";
        } else {
          console.error(result);
        }
      },
      (error) => {
        this.response = error.messagr || "Item could not be updated";
        console.error(this.commonMethods.hasErrorProperties(error));
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
