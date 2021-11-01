import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { CommonMethods } from "../app.common";
import { OptionsModel } from "../models/OptionsModel";
import { ResultModel } from "../models/ResultModel";
import { OptionsService } from "../services/options/options.service";

@Component({
  selector: "app-cylinders",
  templateUrl: "./cylinders.component.html",
  styleUrls: ["./cylinders.component.scss"],
})
export class CylindersComponent implements OnInit {
  itemToEdit: OptionsModel;
  items: OptionsModel[];
  private subscription: Subscription;
  noOfPages: any;
  fullResult: ResultModel;
  cylinderForm: FormGroup;
  optionToDelete = null;

  constructor(
    private optionsService: OptionsService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    public commonMethods: CommonMethods
  ) {
    this.cylinderForm = this.formBuilder.group({
      size: ["", Validators.required],
      price: ["", Validators.required],
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.getItems();
  }

  openModal(exampleModalContent) {
    this.modalService.open(exampleModalContent, {
      size: "lg",
      beforeDismiss: () => false,
    });
  }

  openDeleteConfirmationModal(deleteUserConfirm, cylinderId) {
    this.optionToDelete = cylinderId;
    this.modalService.open(deleteUserConfirm, { size: "sm" });
  }

  handleCreateItem(handleModalClose) {
    const createCylinderData: OptionsModel = {
      name: this.cylinderForm.value.name,
      size: this.cylinderForm.value.size,
      price: this.cylinderForm.value.price,
      discription: this.cylinderForm.value.discription,
    };
    this.optionsService.create(createCylinderData).subscribe(
      async (result) => {
        if (result.status) {
          console.log(result);
          handleModalClose.close();
          this.getItems();
        } else {
          console.error(result);
        }
      },
      (error) => {
        console.error(this.commonMethods.hasErrorProperties(error));
      }
    );
  }

  getItems(pageNumber = 0) {
    this.subscription = this.optionsService.getAll().subscribe(
      (result) => {
        this.fullResult = result.data;
        this.items = result.data.data;
      },
      (error) => {
        console.log("Error: ", error);
      }
    );
  }

  deleteItem(handleDeleteUser) {
    this.subscription = this.optionsService
      .delete(this.optionToDelete)
      .subscribe(
        (result) => {
          console.log("Result of user delete: ", result);
          handleDeleteUser.close();
          this.items = this.items.filter(
            (item) => item._id !== this.optionToDelete
          );
        },
        (error) => {
          console.log("Error: ", error);
        }
      );
  }

  editItem(item) {
    console.log("Item to edit: ", item);
  }

  goToSpecificPage(event) {
    console.log("goToSpecificPage, event is: ", event);
    this.getItems(+event - 1);
    //this.fetchNewPage(page);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
