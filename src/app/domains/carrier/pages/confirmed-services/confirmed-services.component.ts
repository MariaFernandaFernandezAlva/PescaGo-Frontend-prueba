import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {PacketDetailsComponent} from "../../components/packet-details/packet-details.component";
import {MatDialog} from "@angular/material/dialog";
import {ShippingInfoComponent} from "../../components/shipping-info/shipping-info.component";

@Component({
  selector: 'app-confirmed-services',
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    MatIcon
  ],
  templateUrl: './confirmed-services.component.html',
  standalone: true,
  styleUrl: './confirmed-services.component.css'
})
export class ConfirmedServicesComponent implements OnInit {
  requestData = [
    {
      id: 1,
      empresa: "Empresa 1",
      recojo: "Av NNN 123",
      entrega: "Calles 123",
      fecha: "12/10/2023 22:12h",
      pago: "Yape",
      info_envio: "Pendiente",
    },
    {
      id: 2,
      empresa: "Empresa 2",
      recojo: "Av NNN 123",
      entrega: "Calles 123",
      fecha: "12/10/2023 22:12h",
      pago: "Plin",
      info_envio: "Rechazado",
    },
    {
      id: 3,
      empresa: "Empresa 3",
      recojo: "Av NNN 123",
      entrega: "Calles 123",
      fecha: "12/10/2023 22:12h",
      pago: "Efectivo",
      info_envio: "Aceptado",
    },
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openPacketDetails(): void {
    this.dialog.open(PacketDetailsComponent, {
      data: {}, // Puedes pasar datos al componente si es necesario
      panelClass: 'carrier-packet-details-dialog-container', // Clase CSS personalizada está en styles.css
    });
  }
  openShippingInfo(): void {
    this.dialog.open(ShippingInfoComponent, {
      data: {}, // Puedes pasar datos al componente si es necesario
      panelClass: 'carrier-shipping-info-dialog-container', // Clase CSS personalizada está en styles.css
    });
  }
}