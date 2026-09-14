import axios from 'axios';
import { z } from 'zod';

// Configuración de reintentos dinámicos para reducir fricción en fallos de red
interface ConfiguracionPuente {
  proveedor: string;
  apiKey: string;
  maxReintentos?: number;
}

// Estructura universal unificada para el envío de mensajes
export interface PayloadMensaje {
  para: string;
  cuerpo: string;
}

export class OpenBridge {
  private proveedor: string;
  private apiKey: string;
  private maxReintentos: number;

  constructor(config: ConfiguracionPuente) {
    this.proveedor = config.proveedor;
    this.apiKey = config.apiKey;
    this.maxReintentos = config.maxReintentos || 3;
  }

  /**
   * Envía un mensaje abstrayendo la API del proveedor externo
   * Normaliza la respuesta para que la aplicación cliente no sufra cambios
   */
  async enviarMensaje(datos: PayloadMensaje): Promise<{ exito: boolean; idTransaccion: string; proveedorUsado: string }> {
    // Validación estricta del payload en tiempo de ejecución
    const esquemaEsencial = z.object({
      para: z.string().min(5),
      cuerpo: z.string().max(160)
    });
    
    esquemaEsencial.parse(datos);

    let intentos = 0;
    while (intentos < this.maxReintentos) {
      try {
        // Simulación de enrutamiento dinámico según el proveedor elegido
        let urlEndpoint = '';
        if (this.proveedor === 'twilio') {
          urlEndpoint = 'https://twilio.com';
        } else {
          urlEndpoint = 'https://resend.com';
        }

        // Ejecución de la llamada simulada reduciendo la fricción de integración
        // En un entorno real, aquí se adaptan los headers específicos de cada API
        return {
          exito: true,
          idTransaccion: `bridge_tx_${Math.random().toString(36).substr(2, 9)}`,
          proveedorUsado: this.proveedor
        };

      } catch (error) {
        intentos++;
        if (intentos >= this.maxReintentos) {
          throw new Error(`OpenBridge: Error crítico tras ${this.maxReintentos} reintentos con el proveedor ${this.proveedor}`);
        }
        // Retroceso exponencial simulado antes del siguiente reintento
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, intentos) * 100));
      }
    }

    return { exito: false, idTransaccion: '', proveedorUsado: this.proveedor };
  }
}
