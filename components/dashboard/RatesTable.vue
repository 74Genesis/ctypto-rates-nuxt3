<script setup></script>

<template>
  <div class="rates-table bg-white p-6 w-full">
    <div class="rates-table__wrapper">
      <table class="rates-table__table w-full">
        <thead class="rates-table__thead text-gray-400">
          <tr>
            <th class="col-name">Name</th>
            <th class="header">Symbol</th>
            <th class="header">Price ($)</th>
            <th class="header">24h</th>
            <th class="header">Supply</th>
            <th class="header">Cap.</th>

            <!-- Repeat other header column ... -->
          </tr>
        </thead>
        <tbody class="rates-table__tbody">
          <tr>
            <td class="col-name">Bitcoin</td>
            <td>BTC</td>
            <td>$2,342.3</td>
            <td>-5.4%</td>
            <td>10.4m</td>
            <td>$122.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
          <tr>
            <td class="col-name">Etherium</td>
            <td>ETH</td>
            <td>$1,33.3</td>
            <td>-2.4%</td>
            <td>9.4m</td>
            <td>$12.4m</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
.rates-table {
  border-radius: 5px;
  &__wrapper {
    width: 100%;
    overflow-y: auto;
  }
  &__table {
    width: 100%;
    overflow: auto;
  }
  &__thead th {
    font-size: em(15px);
    font-weight: 400;
    text-align: left;
    padding: em(15px) em(18px);
  }
  .col-name {
    left: 0;
    position: sticky;
    z-index: 9999;
    background-color: white;
  }
  &__tbody td {
    font-size: em(16px);
    font-weight: 400;
    text-align: left;
    padding: em(15px) em(18px);
    &.col-name {
      font-weight: 500;
    }
  }
  &__tbody tr {
    border-bottom: 1px solid #eeeeee;
    &:nth-child(2n) {
      background-color: #f6f6f6;
      & .col-name {
        background-color: #f6f6f6;
      }
    }
  }
}
</style>
