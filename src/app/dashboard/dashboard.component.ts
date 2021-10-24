import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { DashboardModel } from "../models/DashboardModel";
import { OrderModel } from "../models/OrderModel";
import { PaymentModel } from "../models/PaymentModel";
import { UserModel } from "../models/UserModel";
import { DashboardService } from "../services/dashboard/dashboard.service";
import { OrdersService } from "../services/orders/orders.service";
import { PaymentService } from "../services/payment/payment.service";
import { UsersService } from "../services/users/users.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  dashboardDetails: DashboardModel;
  loading: boolean;
  private subscription: Subscription;
  payments: number;
  users: UserModel[];
  orders: OrderModel[];

  toggleProBanner(event) {
    console.log("123");
    event.preventDefault();
    document.querySelector("body").classList.toggle("removeProbanner");
  }

  constructor(
    private router: Router,
    private dashboardService: DashboardService,
    private usersService: UsersService,
    private paymentService: PaymentService,
    private orderService: OrdersService
  ) {
    console.log("In dashboard constructor");
  }

  ngOnInit() {
    // this.getDashboard();
    this.getAllPayments();
    this.getAllOrders();
    this.getAllUsers();
  }

  getAllPayments() {
    this.subscription = this.paymentService.getAll().subscribe(
      (result) => {
        console.log("Payments result: ", result);

        this.payments = result.data;
        this.payments = result.data.reduce(
          (sum, payment) => sum + payment.amount,
          0
        );
      },
      (error) => {
        console.log("Got to Error in getAllPayments");
        console.log(error);
      }
    );
  }

  getAllUsers() {
    this.subscription = this.usersService.getAll().subscribe(
      (result) => {
        console.log("Result in getAllUsers: ", result);

        this.users = result.data;
      },
      (error) => {
        console.log("Got to Error in getAllUsers");
        console.log(error);
      }
    );
  }

  getAllOrders() {
    this.subscription = this.orderService.getAll().subscribe(
      (result) => {
        console.log("Result in getAllOrders: ", result);

        this.orders = result.data;
        const delivered = this.orders.filter(
          (order) => order.orderStatus === "delivered"
        ).length;
        const pending = this.orders.filter(
          (order) => order.orderStatus === "pending"
        ).length;
        const cancelled = this.orders.filter(
          (order) => order.orderStatus === "cancelled"
        ).length;
        this.trafficChartData = [
          {
            data: [delivered, pending, cancelled],
          },
        ];
        this.visitSaleChartData = [
          {
            label: "10kg",
            data: [
              0,
              0,
              0,
              0,
              0,
              this.orders.filter(
                (order) => order.orderItems[0].options.size === 10
              ).length,
            ],
            borderWidth: 1,
            fill: false,
          },
          {
            label: "7kg",
            data: [
              0,
              0,
              0,
              0,
              0,
              this.orders.filter(
                (order) => order.orderItems[0].options.size === 7
              ).length,
            ],
            borderWidth: 1,
            fill: false,
          },
          {
            label: "5kg",
            data: [
              0,
              0,
              0,
              0,
              0,
              this.orders.filter(
                (order) => order.orderItems[0].options.size === 5
              ).length,
            ],
            borderWidth: 1,
            fill: false,
          },
          {
            label: "3kg",
            data: [
              0,
              0,
              0,
              0,
              0,
              this.orders.filter(
                (order) => order.orderItems[0].options.size === 3
              ).length,
            ],
            borderWidth: 1,
            fill: false,
          },
        ];
      },
      (error) => {
        console.log("Got to Error in getAllOrders");
        console.log(error);
      }
    );
  }

  getDashboard() {
    this.loading = true;
    this.subscription = this.dashboardService.getAll().subscribe(
      (result) => {
        console.log("Got to Result in getDashboard");

        this.dashboardDetails = result;
        this.loading = false;
      },
      (error) => {
        console.log("Got to Error in getDashboard");
        console.log(error);
      }
    );
  }

  date: Date = new Date();

  visitSaleChartData = [];

  visitSaleChartLabels = [
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
  ];

  visitSaleChartOptions = {
    responsive: true,
    legend: false,
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
            min: 0,
            stepSize: 20,
            max: 50,
          },
          gridLines: {
            drawBorder: false,
            color: "rgba(235,237,242,1)",
            zeroLineColor: "rgba(235,237,242,1)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
            color: "rgba(0,0,0,1)",
            zeroLineColor: "rgba(235,237,242,1)",
          },
          ticks: {
            padding: 20,
            fontColor: "#9c9fa6",
            autoSkip: true,
          },
          categoryPercentage: 0.4,
          barPercentage: 0.4,
        },
      ],
    },
  };

  visitSaleChartColors = [
    {
      backgroundColor: [
        "rgba(154, 85, 255, 1)",
        "rgba(154, 85, 255, 1)",
        "rgba(154, 85, 255, 1)",
        "rgba(154, 85, 255, 1)",
        "rgba(154, 85, 255, 1)",
        "rgba(154, 85, 255, 1)",
      ],
      borderColor: [
        "rgba(154, 85, 255, 1)",
        "rgba(154, 85, 255, 1)",
        "rgba(154, 85, 255, 1)",
        "rgba(154, 85, 255, 1)",
        "rgba(154, 85, 255, 1)",
        "rgba(154, 85, 255, 1)",
      ],
    },
    {
      backgroundColor: [
        "rgba(254, 112, 150, 1)",
        "rgba(254, 112, 150, 1)",
        "rgba(254, 112, 150, 1)",
        "rgba(254, 112, 150, 1)",
        "rgba(254, 112, 150, 1)",
        "rgba(254, 112, 150, 1)",
      ],
      borderColor: [
        "rgba(254, 112, 150, 1)",
        "rgba(254, 112, 150, 1)",
        "rgba(254, 112, 150, 1)",
        "rgba(254, 112, 150, 1)",
        "rgba(254, 112, 150, 1)",
        "rgba(254, 112, 150, 1)",
      ],
    },
    {
      backgroundColor: [
        "rgba(177, 148, 250, 1)",
        "rgba(177, 148, 250, 1)",
        "rgba(177, 148, 250, 1)",
        "rgba(177, 148, 250, 1)",
        "rgba(177, 148, 250, 1)",
        "rgba(177, 148, 250, 1)",
      ],
      borderColor: [
        "rgba(177, 148, 250, 1)",
        "rgba(177, 148, 250, 1)",
        "rgba(177, 148, 250, 1)",
        "rgba(177, 148, 250, 1)",
        "rgba(177, 148, 250, 1)",
        "rgba(177, 148, 250, 1)",
      ],
    },
    {
      backgroundColor: [
        "rgba(190, 220, 150, 1)",
        "rgba(190, 220, 150, 1)",
        "rgba(190, 220, 150, 1)",
        "rgba(190, 220, 150, 1)",
        "rgba(190, 220, 150, 1)",
        "rgba(190, 220, 150, 1)",
      ],
      borderColor: [
        "rgba(190, 220, 150, 1)",
        "rgba(190, 220, 150, 1)",
        "rgba(190, 220, 150, 1)",
        "rgba(190, 220, 150, 1)",
        "rgba(190, 220, 150, 1)",
        "rgba(190, 220, 150, 1)",
      ],
    },
  ];

  trafficChartData = [
    {
      data: [0, 0, 0],
    },
  ];

  trafficChartLabels = ["Delivered", "Pending", "Cancelled"];

  trafficChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    legend: false,
  };

  trafficChartColors = [
    {
      backgroundColor: [
        "rgba(177, 148, 250, 1)",
        "rgba(132, 217, 210, 1)",
        "rgba(254, 112, 150, 1)",
      ],
      borderColor: [
        "rgba(177, 148, 250, .2)",
        "rgba(132, 217, 210, .2)",
        "rgba(254, 112, 150, .2)",
      ],
    },
  ];

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
