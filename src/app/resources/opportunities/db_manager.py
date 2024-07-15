import re
import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
from tkinter.scrolledtext import ScrolledText
import json
from typing import Union

class AddToDB(tk.Tk):
    def __init__(self):
        super().__init__()

        self.title("Add to Opportunity DB JSON")
        self.geometry("1210x480")

        # add frames to create column headers
        self.headings = ttk.Treeview(self, show="headings", height=0)
        self.headings["columns"] = ("gap1", "provider", "gap2", "availability", "gap3")
        self.headings.column("gap1", width=560)
        self.headings.column("provider", width=240)
        self.headings.column("gap2", width=50)
        self.headings.column("availability", width=160)
        self.headings.column("gap3", width=200)
        self.headings.heading("provider", text="Provider", anchor=tk.CENTER)
        self.headings.heading("availability", text="Availability", anchor=tk.CENTER)

        self.headings.grid(row=0, column=0, columnspan=5, sticky=tk.W)

        # create table of data
        self.table = ttk.Treeview(self, height=20, selectmode="extended")
        self.columns = {
            "title": 200,
            "posted": 70,
            "deadline": 70,
            "location": 100,
            "description": 100,
            "name": 100,
            "image": 70,
            "url": 70,
            "link": 50,
            "allAges": 50,
            "min": 30,
            "max": 30,
            "open": 50,
            "tags": 100,
            "requirements": 100
        }
        self.table["columns"] = tuple(self.columns.keys())
        self.table.column("#0", width=20)
        for index, col in enumerate(self.table["columns"]):
            width = tuple(self.columns.values())[index]
            self.table.column(col, anchor=tk.W, width=width)
            self.table.heading(col, text=col)

        self.add_entry_button = ttk.Button(self, text="Add Entry", width=15, command=self.add_entry)
        self.edit_entry_button = ttk.Button(self, text="Edit Entry", width=15, command=self.edit_entry)
        self.delete_entry_button = ttk.Button(self, text="Delete Entry", width=15, command=self.delete_entry)
        self.save_changes_button = ttk.Button(self, text="Save", width=15, command=self.save_changes)
        
        self.table.grid(row=1, column=0, columnspan=5, sticky=tk.W)
        self.add_entry_button.grid(row=2, column=1)
        self.edit_entry_button.grid(row=2, column=2)
        self.delete_entry_button.grid(row=2, column=3)
        self.save_changes_button.grid(row=2, column=4)

        self.columnconfigure(0, weight=48)
        self.columnconfigure(1, weight=1)
        self.columnconfigure(2, weight=1)
        self.columnconfigure(3, weight=1)
        self.columnconfigure(4, weight=1)

        with open(f"{__file__.replace("db_manager.py", "")}opportunity_db.json", "r", encoding="utf-8") as f:
            opportunities = json.load(f)
            for index, opportunity in enumerate(opportunities):
                # process data to be displayed in table, then display it
                data = []
                for key in opportunity:
                    if isinstance(opportunity[key], str):
                        data.append(str(opportunity[key]))
                    elif isinstance(opportunity[key], dict):
                        # make sure to make every value a string!
                        # also, make sure each value is appended to `data` separately
                        for _, v in opportunity[key].items():
                            data.append(v)
                    elif isinstance(opportunity[key], list):
                        data.append("\n".join(opportunity[key]))

                # set column #0 to index
                self.table.insert("", "end", id=index, values=data)

    def entry(self, title: str, data: dict = None, position: int = None):
        self.entry_window = tk.Toplevel(self)
        self.entry_window.title(title)
        self.entry_window.geometry("400x680")

        row = 0
        self.entry_fields = []
        for entry in tuple(self.columns.keys()):
            setattr(self, f"{entry}_label", ttk.Label(self.entry_window, text=entry, padding=(5, 4)))
            getattr(self, f"{entry}_label").grid(row=row, column=0, sticky=tk.NE)
            if entry in ["description", "tags", "requirements"]:
                if entry == "tags":
                    # add a label to explain how to enter tags and requirements
                    self.instructions = ttk.Label(self.entry_window, text="Enter tags and requirements separated by new lines.", padding=(5, 4))
                    self.instructions.grid(row=row, column=1, columnspan=3, sticky=tk.W)
                    self.tags_label.grid(row=row+1, column=0, sticky=tk.NE)
                    row += 1
                setattr(self, f"{entry}_text", ScrolledText(self.entry_window, width=38, height=5, padx=1, pady=1, wrap=tk.WORD, font=("Segoe UI", 10)))
                getattr(self, f"{entry}_text").grid(row=row, column=1, columnspan=3, sticky="ew", pady=2)
                self.entry_fields.append(f"{entry}_text")
            elif entry in ["allAges", "open"]:
                # radio buttons for boolean values
                setattr(self, f"{entry}_var", tk.BooleanVar())
                setattr(self, f"{entry}_true", ttk.Radiobutton(self.entry_window, text="Yes", variable=getattr(self, f"{entry}_var"), padding=(5,4), value=True))
                setattr(self, f"{entry}_false", ttk.Radiobutton(self.entry_window, text="No", variable=getattr(self, f"{entry}_var"), padding=(5,4), value=False))
                getattr(self, f"{entry}_true").grid(row=row, column=1, pady=2)
                getattr(self, f"{entry}_false").grid(row=row, column=2, pady=2)
                self.entry_fields.append(f"{entry}_var")
            elif entry in ["min", "max"]:
                setattr(self, f"{entry}_spinbox", ttk.Spinbox(self.entry_window, width=20, from_=0, to=100))
                getattr(self, f"{entry}_spinbox").grid(row=row, column=1, columnspan=2, sticky=tk.W, pady=2)
                self.entry_fields.append(f"{entry}_spinbox")
            else:
                setattr(self, f"{entry}_entry", ttk.Entry(self.entry_window, width=50))
                getattr(self, f"{entry}_entry").grid(row=row, column=1, columnspan=3, sticky="ew", pady=2)
                self.entry_fields.append(f"{entry}_entry")
            row += 1
        
        if data is not None:
            for index, entry in enumerate(self.entry_fields):
                if "text" in entry:
                    getattr(self, entry).insert(tk.END, data[index])
                elif "var" in entry:
                    getattr(self, entry).set(data[index])
                elif "spinbox" in entry:
                    getattr(self, entry).delete(0, tk.END)
                    getattr(self, entry).insert(0, data[index])
                elif "entry" in entry:
                    getattr(self, entry).delete(0, tk.END)
                    getattr(self, entry).insert(0, data[index])

        self.submit_button = ttk.Button(self.entry_window, text="Submit", command=self.submit(position))
        self.submit_button.grid(row=row, column=3, sticky=tk.E, pady=5)

        self.entry_window.columnconfigure(0, weight=0)
        self.entry_window.columnconfigure(1, weight=1)
        self.entry_window.columnconfigure(2, weight=1)
        self.entry_window.columnconfigure(3, weight=10)

    # submit() func adds data to table
    def submit(self, position: Union[int, str] = "end"):
        data = []
        for entry in self.entry_fields:
            if "text" in entry:
                # check if text field is empty
                if not getattr(self, entry).get("1.0", tk.END).strip():
                    field = entry.replace("_text", "")
                    self.popup = messagebox.showinfo("Error", f"Please enter text for {field}.")
                    return
                data.append(getattr(self, entry).get("1.0", tk.END).strip())
            elif "var" in entry:
                data.append(getattr(self, entry).get())
            elif "spinbox" in entry:
                try:
                    data.append(int(getattr(self, entry).get()))
                except ValueError:
                    field = entry.replace("_spinbox", "")
                    self.popup = messagebox.showinfo("Error", f"Please enter a valid number for {field}.")
                    return
            elif "entry" in entry:
                field = entry.replace("_entry", "")
                if entry in ["posted_entry", "deadline_entry"]:
                    # check if date is in correct format: MM-DD-YYYY
                    date = getattr(self, entry).get()
                    if not re.match(r"([0-9]{2}-){2}[0-9]{4}", date):
                        self.popup = messagebox.showinfo("Error", f"Please enter date in MM-DD-YYYY format for {field}.")
                        return
                    data.append(getattr(self, entry).get())
                elif entry in ["link_entry", "url_entry"]:
                    url = getattr(self, entry).get()
                    if not re.match(r"[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?", url):
                        self.popup = messagebox.showinfo("Error", f"Please enter a valid URL for {field}.")
                        return
                    data.append(getattr(self, entry).get().strip())
                else:
                    if not getattr(self, entry).get().strip():
                        self.popup = messagebox.showinfo("Error", f"Please enter text for {field}.")
                        return
                    data.append(getattr(self, entry).get())

        # delete that row in the table
        self.table.delete(self.table.get_children()[position])
        # add new data to that row
        table_index = f"{str(position)}.0" if position is not None else "end"
        self.table.insert("", index=table_index, values=data)

        for entry in tuple(self.columns.keys()):
            if "text" in entry:
                getattr(self, f"{entry}_text").delete("1.0", tk.END)
            elif "var" in entry:
                getattr(self, f"{entry}_var").set(False)
            elif "spinbox" in entry:
                getattr(self, f"{entry}_spinbox").delete(0, tk.END)
            elif "entry" in entry:
                getattr(self, f"{entry}_entry").delete(0, tk.END)

    def add_entry(self):
        self.entry("Add Entry")

    def edit_entry(self):
        # check amount of selected entries
        selected = self.table.selection()
        if len(selected) != 1:
            self.popup = messagebox.showinfo("Error", "Select only one entry to edit.")
            return
        
        # get data from selected entry
        data = self.table.item(selected[0])["values"]
        
        # get the position of the selected item
        position = self.table.index(selected[0])
        print(position)
        
        # make edit window
        self.entry("Edit Entry", data, position)

    def delete_entry(self):
        selected = self.table.selection()
        if not selected:
            self.popup = messagebox.showinfo("Error", "No entry selected.")
            return

        for item in selected:
            self.table.delete(item)
    
    def save_changes(self):
        with open(f"{__file__.replace('db_manager.py', '')}opportunity_db.json", "w", encoding="utf-8") as f:
            opportunities = []
            for index in self.table.get_children():
                data = self.table.item(index)["values"]
                opportunity = {
                    "title": data[0],
                    "posted": data[1],
                    "deadline": data[2],
                    "location": data[3],
                    "description": data[4],
                    "provider": {
                        "name": data[5],
                        "image": data[6],
                        "url": data[7]
                    },
                    "link": data[8],
                    "availability": {
                        "allAges": bool(data[9]),
                        "min": data[10],
                        "max": data[11],
                        "open": bool(data[12]),
                    },
                    "tags": data[13].split("\n"),
                    "requirements": data[14].split("\n"),
                }
                opportunities.append(opportunity)
            json.dump(opportunities, f)

if __name__ == "__main__":
    app = AddToDB()
    app.mainloop()
