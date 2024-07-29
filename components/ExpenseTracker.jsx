"use client";

import { useState } from "react";

import { BsPlusCircle } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (name && cost && quantity) {
      const expensecost = parseFloat(cost) * parseFloat(quantity);
      setExpenses([
        ...expenses,
        { name, cost: expensecost, quantity: parseFloat(quantity) },
      ]);
      setName("");
      setCost("");
      setQuantity("");
    }
  };

  const handleClear = () => {
    setExpenses([]);
    setName("");
    setCost("");
    setQuantity("");
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.cost,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
      <form onSubmit={handleAddExpense} className="mb-4">
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Expense name"
            className="rounded-lg p-2 flex-1"
          />
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="Cost per unit"
            className="rounded-lg p-2"
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            className="rounded-lg p-2"
          />
          <button type="submit" className="rounded-lg bg-black text-white p-2">
            <BsPlusCircle />
          </button>
        </div>
      </form>
      <ul className="mb-4">
        {expenses.map((expense, index) => (
          <li key={index} className="border-b py-2 flex justify-between items-center">
            <div>
              {expense.name}: ${expense.cost.toFixed(2)} (Quantity:{" "}
              {expense.quantity})
            </div>
            <button
              onClick={() => handleDeleteExpense(index)}
              className="rounded-lg bg-red-500 text-white p-2 ml-4 rounded"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <div className="font-bold">Total: ${totalExpenses.toFixed(2)}</div>
      <button
        type="button"
        onClick={handleClear}
        className="rounded-lg bg-red-500 text-white p-2"
      >
        Clear
      </button>
    </div>
  );
};

export default ExpenseTracker;
