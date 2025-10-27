import { z } from 'zod';
import { tool } from 'ai';

/**
 * Banking Assistant Tools
 * These tools extend the assistant's capabilities with specific functions
 */

export const bankingTools = {
  convert_currency: tool({
    description: 'Converts an amount from one currency to another using current exchange rates. Useful for international transactions and multi-currency account queries.',
    inputSchema: z.object({
      amount: z.number().describe('The amount to convert'),
      from_currency: z.string().describe('The source currency code (e.g., USD, EUR, GBP)'),
      to_currency: z.string().describe('The target currency code (e.g., USD, EUR, GBP)'),
    }),
    execute: async ({ amount, from_currency, to_currency }) => {
        const rates: Record<string, Record<string, number>> = {
            USD: { EUR: 0.92, GBP: 0.79, JPY: 149.50, CAD: 1.36, AUD: 1.52, CHF: 0.88 },
            EUR: { USD: 1.09, GBP: 0.86, JPY: 162.45, CAD: 1.48, AUD: 1.65, CHF: 0.96 },
            GBP: { USD: 1.27, EUR: 1.16, JPY: 189.20, CAD: 1.72, AUD: 1.92, CHF: 1.12 },
            JPY: { USD: 0.0067, EUR: 0.0062, GBP: 0.0053, CAD: 0.0091, AUD: 0.0102, CHF: 0.0059 },
            CAD: { USD: 0.74, EUR: 0.68, GBP: 0.58, JPY: 109.93, AUD: 1.12, CHF: 0.65 },
            AUD: { USD: 0.66, EUR: 0.61, GBP: 0.52, JPY: 98.36, CAD: 0.89, CHF: 0.58 },
            CHF: { USD: 1.14, EUR: 1.04, GBP: 0.89, JPY: 169.89, CAD: 1.54, AUD: 1.73 },
          };
    
          const fromUpper = from_currency.toUpperCase();
          const toUpper = to_currency.toUpperCase();
    
          // Same currency
          if (fromUpper === toUpper) {
            return {
              original_amount: amount,
              from_currency: fromUpper,
              converted_amount: amount,
              to_currency: toUpper,
              exchange_rate: 1,
              timestamp: new Date().toISOString(),
            };
          }
    
          // Check if conversion is available
          if (!rates[fromUpper] || !rates[fromUpper][toUpper]) {
            throw new Error(`Exchange rate not available for ${fromUpper} to ${toUpper}. Supported currencies: USD, EUR, GBP, JPY, CAD, AUD, CHF`);
          }
    
          const rate = rates[fromUpper][toUpper];
          const converted = amount * rate;
          console.log('debug: converted', converted);
          return {
            original_amount: amount,
            from_currency: fromUpper,
            converted_amount: Number(converted.toFixed(2)),
            to_currency: toUpper,
            exchange_rate: rate,
            timestamp: new Date().toISOString(),
          };
    },
  }),
};

